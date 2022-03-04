import { definitions } from './../types/supabase'
import { data } from 'autoprefixer'
import { useQuery } from 'react-query'
import { supabase } from '../lib/supabaseClient'

const getUser = async () => {
    // const { data, error } = await supabase.from("users").select().single();
    const data = await supabase.auth.user()
    const { data: roledata, error: roleError } = await supabase
        .from<definitions['user_roles']>('user_roles')
        .select(
            `
            role
        `
        )
        .eq('user_id', data?.id)
        .single()
    const { data: userData, error: userError } = await supabase
        .from<definitions['users']>('users')
        .select(
            `
            first_name,
            last_name
        `
        )
        .eq('id', data?.id)
        .single()
    if (!data) {
        throw new Error('User not found')
    }
    return { data, roledata, userData }
}

const useUser = () => {
    return useQuery('user', () => getUser())
}

export default useUser
