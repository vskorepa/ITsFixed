import React from 'react'
import type { NextPage } from 'next'
import TopNav from '../components/Nav/topNav'
import AuthProtectedWrapper from '../components/protected/UserProtected'
import TicketList from '../components/Tickets/TicketList'
const Home: NextPage = () => {
    return (
        <AuthProtectedWrapper role="user">
            <div>
                <TopNav />
                <div className="flex w-full h-full flex-wrap justify-center">
                    <TicketList />
                </div>
            </div>
        </AuthProtectedWrapper>
    )
}

export default Home
