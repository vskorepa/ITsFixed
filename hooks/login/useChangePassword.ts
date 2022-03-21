import { useMutation } from 'react-query'
import { supabase } from '../../lib/supabaseClient'
import { ChangePasswordFormValues } from '../../types/formtypes'

const changePassword = async (props: ChangePasswordFormValues) => {
    //@ts-ignore
    const { data, error } = supabase.auth.update({
        password: props.password,
    })
    if (error) {
        throw new Error(error.message)
    }

    return data
}

const useChangePassword = (props: ChangePasswordFormValues) => {
    return useMutation('change password', () => changePassword(props))
}

export default useChangePassword
