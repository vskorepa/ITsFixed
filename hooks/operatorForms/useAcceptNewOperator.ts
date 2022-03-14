import { definitions } from './../../types/supabase'
import { CreateTicketValues, OperatorFormValues } from '../../types/formtypes'
import { useMutation } from 'react-query'
import { supabase } from '../../lib/supabaseClient'
import { SendMessageProps } from '../../types/supabaseTypes'
import { useRouter } from 'next/router'

const promoteToOperator = async (user_id: string) => {
    const { data, error } = await supabase
        .from<definitions['user_roles']>('user_roles')
        .update({ role: 'operator' })
        .eq('user_id', user_id)
    if (error) {
        throw new Error('Updating user role failed')
    }
    if (!data) {
        throw new Error('User not found')
    }
    return data
}

const useAcceptNewOperator = (user_id: string) => {
    return useMutation(
        ['ChangeUserRole', user_id],
        () => promoteToOperator(user_id),
        {
            onSuccess: async (data) => {
                const { error: uploadError } = await supabase
                    .from<definitions['operatorforms']>('operatorforms')
                    .update({ active: false })
                    .eq('user_id', user_id)
            },
        }
    )
}
export default useAcceptNewOperator
