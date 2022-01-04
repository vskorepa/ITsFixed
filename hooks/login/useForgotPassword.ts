import { useMutation } from 'react-query'
import { supabase } from '../../lib/supabaseClient'
import { ResetPasswordValues } from '../../types/formtypes'

const forgotPassword = async ({ email }: ResetPasswordValues) => {
    //@ts-ignore
    const { data, error } = supabase.auth.api.resetPasswordForEmail(email)
    if (error) {
        throw new Error(error.message)
    }

    return data
}

const useForgotPassword = ({ email }: ResetPasswordValues) => {
    return useMutation('forgot password', () => forgotPassword({ email }))
}

export default useForgotPassword
