import React from 'react'
import type { NextApiRequest, NextPage } from 'next'
import TicketList from '../components/Tickets/TicketList'
import { supabase } from '../lib/supabaseClient'
import useUser from '../hooks/useUser'
import UserTicketList from '../components/Tickets/userTickets/userTicketsList'
import { Loading } from '@nextui-org/react'
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
                {data?.roledata?.role === 'operator' ? (
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
    // const { data: userRole, error: roleError } = await supabase
    //     .from<definitions['user_roles']>('user_roles')
    //     .select(
    //         `
    //         role
    //     `
    //     )
    //     .eq('user_id', user?.id)
    //     .single()
    if (!user) {
        return { props: {}, redirect: { destination: '/auth/login' } }
    }
    // if (userRole?.role !== 'operator') {
    //     return { props: {}, redirect: { destination: '/' } }
    // }

    return { props: { user } }
}
export default Home
