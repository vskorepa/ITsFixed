import React from 'react'
import type { NextPage } from 'next'
import TicketList from '../components/Tickets/TicketList'
import { supabase } from '../lib/supabaseClient'
import useUser from '../hooks/useUser'
import UserTicketList from '../components/Tickets/userTickets/userTicketsList'
import { Loading } from '@nextui-org/react'
import { definitions } from '../types/supabase'
const Home: NextPage = () => {
    const { data, isLoading } = useUser()
    if (isLoading) {
        return (
            <div>
                <Loading></Loading>
            </div>
        )
    }
    return (
        <div>
            <div className="flex w-full h-full flex-wrap justify-center">
                {data?.roledata?.role !== 'user' ? (
                    <TicketList />
                ) : (
                    <UserTicketList />
                )}
            </div>
        </div>
    )
}
export const getServerSideProps = async ({ req }: any) => {
    const { user } = await supabase.auth.api.getUserByCookie(req)
    if (!user) {
        return { props: {}, redirect: { destination: '/auth/login' } }
    }

    return { props: { user } }
}
export default Home
