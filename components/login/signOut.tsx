import React from 'react'
import { useRouter } from 'next/router'
import useLogoutUser from '../../hooks/login/useLogoutUser'

const SignOut: React.FC = () => {
    const router = useRouter()
    const LogoutMutation = useLogoutUser()
    console.log(LogoutMutation.error)
    console.log(LogoutMutation.data)

    if (LogoutMutation.isSuccess) {
        router.push('/')
    }
    return <div></div>
}

export default SignOut
