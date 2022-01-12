import React, { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabaseClient'

import TicketInList from './TicketInList'
import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.css'
import TicketDetail from './TicketDetail'
import { TicketBasicInfo } from '../../types/supabaseTypes'
import TicketsNav from '../Nav/TicketsNav'
import useTickets from '../../hooks/tickets/useTickets'
import { Loading } from '@nextui-org/react'
import { definitions } from '../../types/supabase'

const TicketList: React.FC = () => {
    const [tickets, setTickets] = useState<TicketBasicInfo[]>()
    const [messages, setMessages] = useState<definitions['messages'][]>()
    const [ticketId, setTicketId] = useState('')
    const [requiredState, setRequiredState] = useState('waiting')
    const [search, setSearch] = useState('')

    const { data, isLoading, refetch } = useTickets(
        requiredState,
        undefined,
        search
    )
    const [newMessage, setNewMessage] = useState<definitions['messages']>()

    useEffect(() => {
        const TicketSubscription = supabase
            .from<TicketBasicInfo>('tickets')
            .on('*', () => {
                refetch()
            })
            .subscribe()

        return () => {
            supabase.removeSubscription(TicketSubscription)
        }
    }, [])
    useEffect(() => {
        setTickets(data ?? [])
    }, [data])
    useEffect(() => {
        const MessageSubscription = supabase
            .from<definitions['messages']>('messages')
            .on('INSERT', (payload) => {
                setNewMessage(payload.new)
            })
            .subscribe()

        return () => {
            supabase.removeSubscription(MessageSubscription)
        }
    }, [])

    if (isLoading) {
        return (
            <div className="flex flex-row w-screen h-full flex-wrap">
                <TicketsNav
                    stateChange={(state) => {
                        setRequiredState(state)
                    }}
                    searchChange={(search) => {
                        setSearch(search)
                    }}
                ></TicketsNav>
                <div className="flex flex-row w-full h-80vh">
                    <div className="w-1/3 h-80vh justify-around items-center">
                        <Loading size={50} color="succes" />
                    </div>
                    <div className="flex w-2/3 h-80vh justify-around items-center">
                        <Loading color="succes" size={100} />
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="flex flex-row w-screen h-full flex-wrap">
            <TicketsNav
                searchChange={(search) => setSearch(search)}
                stateChange={(state) => setRequiredState(state)}
            ></TicketsNav>
            <div className="flex flex-row w-full h-80vh">
                <div className="w-1/3 h-80vh">
                    <SimpleBar className="w-full overflow-y-auto h-full pr-3">
                        {tickets?.map((item) => (
                            <TicketInList
                                key={'TicketInList' + item.id}
                                ticketData={item}
                                ChangeTicketId={(ticket_id) => {
                                    setTicketId(ticket_id)
                                }}
                            />
                        ))}
                    </SimpleBar>
                </div>
                <TicketDetail
                    newMessage={newMessage}
                    key={'Ticket_detail' + ticketId}
                    ticket_id={ticketId}
                />
            </div>
        </div>
    )
}
export default TicketList
