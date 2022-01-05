import React, { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabaseClient'

import { useRouter } from 'next/router'
import TicketInList from './TicketInList'
import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.css'
import TicketDetail from './TicketDetail'
import { TicketBasicInfo } from '../../types/supabaseTypes'
import TicketsNav from '../Nav/TicketsNav'

const TicketList: React.FC = () => {
    const [data, setTickets] = useState<TicketBasicInfo[]>()
    const router = useRouter()
    useEffect(() => {
        console.log('USE EFFECT CALL TO SUBSCRIBE TICKETS')

        fetchTickets()
        const Subscription = supabase
            .from('tickets')
            .on('*', () => {
                fetchTickets()
            })
            .subscribe()
        console.log(supabase.getSubscriptions())

        return () => {
            console.log('REMOVED TICKET SUBSCRIPTION')
            supabase.removeSubscription(Subscription)
            console.log(supabase.getSubscriptions())
        }
    }, [])

    const fetchTickets = async () => {
        const { data } = await supabase
            .from<TicketBasicInfo>('tickets')
            .select(
                `
        id,
        state,
        description,
        created_at,
        ticket_type(
            name,
            description
        ),
        users:user_id(
            first_name,
            email
        )

    `
            )
            .eq('state', 'waiting')
            .order('created_at')

        setTickets(data ?? [])
    }
    return (
        <div className="flex flex-row w-screen h-full flex-wrap">
            <TicketsNav></TicketsNav>
            <div className="flex flex-row w-full h-80vh">
                <div className="w-1/3 h-80vh">
                    <SimpleBar className="w-full overflow-y-auto h-full pr-3">
                        {data?.map((item) => (
                            <TicketInList key={item.id} ticketData={item} />
                        ))}
                    </SimpleBar>
                </div>
                <TicketDetail
                    //@ts-ignore
                    key={router.query.ticketId ?? ''}
                    //@ts-ignore
                    id={router.query.ticketId ?? ''}
                />
            </div>
        </div>
    )
}
export default TicketList
