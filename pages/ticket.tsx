import React, { useEffect, useState } from 'react'
import type { NextApiRequest, NextPage } from 'next'
import TicketList from '../components/Tickets/TicketList'
import { supabase } from '../lib/supabaseClient'
import useUser from '../hooks/useUser'
import UserTicketList from '../components/Tickets/userTickets/userTicketsList'
import { definitions } from '../types/supabase'
import UserTicketDetail from '../components/Tickets/userTickets/userTicketDetail'
import { useRouter } from 'next/router'
const Home: NextPage = () => {
    const { data } = useUser()
    const router = useRouter()
    const [ticket_id, setTicket_id] = useState('')
    const [newMessage, setNewMessage] = useState<definitions['messages']>()
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
    console.log(user?.id)
    const { data: userRole, error: roleError } = await supabase
        .from<definitions['user_roles']>('user_roles')
        .select(
            `
            role
        `
        )
        .eq('user_id', user?.id)
        .single()
    console.log(userRole)
    if (!user) {
        return { props: {}, redirect: { destination: '/auth/login' } }
    }
    if (userRole?.role !== 'user') {
        return { props: {}, redirect: { destination: '/' } }
    }

    return { props: { user } }
}
export default Home
