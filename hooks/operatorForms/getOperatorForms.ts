import { useQuery } from 'react-query'
import { supabase } from '../../lib/supabaseClient'
import { definitions } from '../../types/supabase'
import { OperatorForm } from '../../types/supabaseTypes'
const getOperatorForms = async () => {
    const { data, error } = await supabase
        .from<OperatorForm>('operatorforms')
        .select(
            `
            id,
            conviction,
            user_id,
            insert_at,
            users:user_id(
                first_name,
                last_name,
                email
            )
    `
        )

    console.log(data)
    if (error) {
        throw new Error(error.message)
    }

    if (!data) {
        throw new Error('No forms')
    }

    return data
}

const useGetOperatorForms = () => {
    return useQuery(['operatorForms'], () => getOperatorForms())
}
export default useGetOperatorForms
