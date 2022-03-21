import React, { useState } from 'react'
import { SubmitHandler } from 'react-hook-form'
import { SignInValues } from '../../types/formtypes'

import { useRouter } from 'next/router'
import useLogin from '../../hooks/login/useLoginUser'
import { SignInForm } from '../ReactHookForm/Forms'
import { Button } from '@nextui-org/react'
import { supabase } from '../../lib/supabaseClient'
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
    async function signInWithFacebook() {
        const { user, error } = await supabase.auth.signIn({
            provider: 'facebook',
        })
    }
    return (
        <div className="flex justify-center flex-col">
            <SignInForm OnFormSubmit={(data) => onSubmit(data)} />
            {loginMutation.isError && (
                //@ts-ignore
                <p className="text-red-500">{loginMutation.error.message}</p>
            )}
            <Button className="" onClick={() => signInWithFacebook()}>
                LOGIN with Facebook
            </Button>
        </div>
    )
}

export default SignIn
