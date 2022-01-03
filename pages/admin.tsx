import React from 'react'
import type { NextPage } from 'next'
import { Text } from '@nextui-org/react'
import TopNav from '../components/Nav/topNav'
import AuthProtectedWrapper from '../components/protected/UserProtected'
const Home: NextPage = () => {
    return (
        <AuthProtectedWrapper role="admin">
            <TopNav />
            <div className="text-center">
                <Text className="text-sandy font-bold text-4xl" h1>
                    ADMIN Page
                </Text>
            </div>
        </AuthProtectedWrapper>
    )
}

export default Home
