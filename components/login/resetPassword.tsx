import { Loading } from '@nextui-org/react'
import Link from 'next/link'
import React, { useState } from 'react'
import { SubmitHandler } from 'react-hook-form'
import useForgotPassword from '../../hooks/login/useForgotPassword'
import { supabase } from '../../lib/supabaseClient'
import { ResetPasswordValues } from '../../types/formtypes'

import { ResetPasswordForm } from '../ReactHookForm/Forms'
const ResetPassword: React.FC = () => {
    const onSubmit: SubmitHandler<ResetPasswordValues> = (data) => {
        setEmail(data.email)
        forgotPasswordMutation.mutate()
    }
    const [email, setEmail] = useState('')

    const forgotPasswordMutation = useForgotPassword({ email })

    return (
        <div className="justify-center flex-wrap">
            <ResetPasswordForm OnFormSubmit={(data) => onSubmit(data)} />
            {forgotPasswordMutation.isLoading ? (
                <Loading></Loading>
            ) : forgotPasswordMutation.isSuccess ? (
                <div className="text-primary flex gap-2">
                    <p>
                        Check your email for a reset password link. Back to
                        login page:
                    </p>

                    <a
                        className="text-secondary
                    "
                    >
                        <Link href="/auth/login">Login Page</Link>
                    </a>
                </div>
            ) : (
                <p className="text-red-500">
                    Something went wron with the password reset. Check corectnes
                    of the email above or contact the administrator.
                </p>
            )}
        </div>
    )
}

export default ResetPassword
