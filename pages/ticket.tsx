import React, { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import { supabase } from '../lib/supabaseClient'
import { definitions } from '../types/supabase'
import UserTicketDetail from '../components/Tickets/userTickets/userTicketDetail'
import { useRouter } from 'next/router'
import useUser from '../hooks/useUser'
const Home: NextPage = () => {
    const router = useRouter()
    const { data, isLoading } = useUser()
    if (!isLoading) {
        if (data?.roledata?.role !== 'user') {
            router.push('/')
        }
    }
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

    if (!user) {
        return { props: {}, redirect: { destination: '/auth/login' } }
    }

    return { props: { user } }
}
export default Home
