import React from 'react'
import type { NextApiRequest, NextPage } from 'next'
import TicketList from '../components/Tickets/TicketList'
import { supabase } from '../lib/supabaseClient'
const Home: NextPage = () => {
    return (
        <div>
            <div className="flex w-full h-full flex-wrap justify-center">
                <TicketList />
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
    console.log(user)
    if (!user) {
        return { props: {}, redirect: { destination: '/auth/login' } }
    }
    // if (userRole?.role !== 'operator') {
    //     return { props: {}, redirect: { destination: '/' } }
    // }

    return { props: { user } }
}
export default Home
