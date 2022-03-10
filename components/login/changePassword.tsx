import { Loading } from '@nextui-org/react'
import Link from 'next/link'
import React, { useState } from 'react'
import { SubmitHandler } from 'react-hook-form'
import useChangePassword from '../../hooks/login/useChangePassword'
import { ChangePasswordFormValues } from '../../types/formtypes'

import { ChangePasswordForm } from '../ReactHookForm/Forms'
const ChangePassword: React.FC = () => {
    const onSubmit: SubmitHandler<ChangePasswordFormValues> = (data) => {
        console.log(data)
        setNewPassword(data.newpassword)
        changePasswordMutation.mutate()
    }
    const [newPassword, setNewPassword] = useState('')

    const changePasswordMutation = useChangePassword({
        newpassword: newPassword,
    })

    return (
        <div className="justify-center flex-wrap">
            <ChangePasswordForm
                OnFormSubmit={(data) => onSubmit(data)}
            ></ChangePasswordForm>
            {changePasswordMutation.isSuccess && (
                <p className="text-primary">
                    your password has been succesfully changed
                </p>
            )}
        </div>
    )
}

export default ChangePassword
