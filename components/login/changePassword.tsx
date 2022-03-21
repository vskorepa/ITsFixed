import useTranslation from 'next-translate/useTranslation'
import React, { useState } from 'react'
import { SubmitHandler } from 'react-hook-form'
import useChangePassword from '../../hooks/login/useChangePassword'
import { ChangePasswordFormValues } from '../../types/formtypes'

import { ChangePasswordForm } from '../ReactHookForm/Forms'
const ChangePassword: React.FC = () => {
    const { t } = useTranslation('common')

    const onSubmit: SubmitHandler<ChangePasswordFormValues> = (data) => {
        setNewPassword(data.password)
    }
    const [newPassword, setNewPassword] = useState('')

    const changePasswordMutation = useChangePassword({
        password: newPassword,
    })

    return (
        <div className="justify-center flex-wrap">
            <ChangePasswordForm
                OnFormSubmit={(data) => onSubmit(data)}
            ></ChangePasswordForm>
            {changePasswordMutation.isSuccess && (
                <p className="text-primary">{t('PasswordChanged')}</p>
            )}
            {changePasswordMutation.error instanceof Error && (
                <p className="text-primary">
                    {changePasswordMutation.error.message}
                </p>
            )}
        </div>
    )
}

export default ChangePassword
