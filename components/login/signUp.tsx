import React, { useState } from 'react'
import { SubmitHandler } from 'react-hook-form'
import { SignUpValues } from '../../types/formtypes'

import { useRouter } from 'next/router'
import useCreateUser from '../../hooks/login/useCreateUser'
import { SignUpForm } from '../ReactHookForm/Forms'

const SignUp: React.FC = () => {
    const onSubmit: SubmitHandler<SignUpValues> = (data) => {
        console.log(data)
        setEmail(data.email)
        setPassword(data.password)
        setFirst_name(data.first_name)
        setLast_name(data.last_name)
        createUserMutation.mutate()
    }

    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [first_name, setFirst_name] = useState('')
    const [last_name, setLast_name] = useState('')

    const createUserMutation = useCreateUser({
        email,
        password,
        first_name,
        last_name,
    })
    if (createUserMutation.isSuccess) {
        router.push('/')
    }
    return (
        <div className="justify-center flex-wrap">
            <SignUpForm OnFormSubmit={(data) => onSubmit(data)} />
            {createUserMutation.isError && (
                <p className="text-red-500">
                    {
                        //@ts-ignore
                        createUserMutation.error.message
                    }
                </p>
            )}
        </div>
    )
}

export default SignUp
