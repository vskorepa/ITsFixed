import { useQuery } from 'react-query'
import { supabase } from '../../lib/supabaseClient'
import { definitions } from '../../types/supabase'
const getOperatorForms = async () => {
    const { data, error } = await supabase
        .from<definitions['operatorforms']>('operatorforms')
        .select(
            `
            id,
            conviction,
            user_id,
    `
        )
        .order('insert_at')

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
