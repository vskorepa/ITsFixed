import React, { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import { supabase } from '../lib/supabaseClient'
import { definitions } from '../types/supabase'
import UserTicketDetail from '../components/Tickets/userTickets/userTicketDetail'
import { useRouter } from 'next/router'
const Home: NextPage = () => {
    const router = useRouter()
    const [ticket_id, setTicket_id] = useState('')
    useEffect(() => {
        //@ts-ignore
        setTicket_id(router.query.TicketId ?? null)
    }, [router.query])
    return (
        <div>
            <div className="flex w-full h-full flex-wrap justify-center">
                <UserTicketDetail ticket_id={ticket_id} />
            </div>
        </div>
    )
}

export const getServerSideProps = async ({ req }: any) => {
    const { user } = await supabase.auth.api.getUserByCookie(req)
    const { data: userRole, error: roleError } = await supabase
        .from<definitions['user_roles']>('user_roles')
        .select(
            `
            role
        `
        )
        .eq('user_id', user?.id)
        .single()
    if (!user) {
        return { props: {}, redirect: { destination: '/auth/login' } }
    }
    if (userRole?.role !== 'user') {
        return { props: {}, redirect: { destination: '/' } }
    }

    return { props: { user } }
}
export default Home
