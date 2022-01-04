import React, { useState } from 'react'
import { SubmitHandler } from 'react-hook-form'
import { SignInValues } from '../../types/formtypes'

import { useRouter } from 'next/router'
import useLogin from '../../hooks/login/useLoginUser'
import { SignInForm } from '../ReactHookForm/Forms'
const SignIn: React.FC = () => {
    const onSubmit: SubmitHandler<SignInValues> = (data) => {
        setEmail(data.email)
        setPassword(data.password)
        loginMutation.mutate()
    }

    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const loginMutation = useLogin({ email, password })
    if (loginMutation.isSuccess) {
        router.push('/')
    }

    return (
        <div className="justify-center flex-wrap">
            <SignInForm OnFormSubmit={(data) => onSubmit(data)} />
            {loginMutation.isError && (
                //@ts-ignore
                <p className="text-red-500">{loginMutation.error.message}</p>
            )}
        </div>
    )
}

export default SignIn
