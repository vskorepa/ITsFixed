import { CreateTicketValues, OperatorFormValues } from '../../types/formtypes'
import { useMutation } from 'react-query'
import { supabase } from '../../lib/supabaseClient'
import { SendMessageProps } from '../../types/supabaseTypes'
import { useRouter } from 'next/router'

const submitOperatorForm = async (props: OperatorFormValues) => {
    const { data, error } = await supabase
        .from<OperatorFormValues>('operatorforms')
        .insert(
            [
                {
                    user_id: supabase.auth.user()?.id,
                    conviction: props.conviction,
                },
            ],
            { returning: 'minimal' }
        )
    if (error) {
        throw new Error('Inserting form failed')
    }
    return data
}

const useSubmitOperatorForm = (props: OperatorFormValues) => {
    return useMutation(
        ['SubmitForm', props.user_id],
        () => submitOperatorForm(props),
        {
            onSuccess: async (data) => {
                const { error: uploadError } = await supabase.storage
                    .from('cv-files')
                    .upload(
                        supabase.auth.user()?.id ?? 'unauthenticated',
                        props.cv[0]
                    )
                if (uploadError) {
                    throw new Error('Inserting form failed')
                }
            },
        }
    )
}
export default useSubmitOperatorForm
