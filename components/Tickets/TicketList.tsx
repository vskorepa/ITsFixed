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
import { useRouter } from 'next/router'

const TicketList: React.FC = () => {
    const router = useRouter()
    const [tickets, setTickets] = useState<TicketBasicInfo[]>()
    const [ticketId, setTicketId] = useState('')
    const [requiredState, setRequiredState] = useState('waiting')
    const [search, setSearch] = useState('')
    const [type, setType] = useState(0)
    const [ticketsToggle, setTicketsToggle] = useState(true)
    const { data, isLoading, refetch } = useTickets(requiredState, type, search)
    const [newMessage, setNewMessage] = useState<definitions['messages']>()

    const clearFilters = () => {
        setType(0)
        setRequiredState('waiting')
    }
    useEffect(() => {
        if (router.query.ticket_id !== undefined) {
            setTicketId(String(router.query.ticket_id))
        }
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
                    filterClear={() => clearFilters()}
                    stateChange={(state) => {
                        setRequiredState(state)
                    }}
                    searchChange={(search) => {
                        setSearch(search)
                    }}
                    typeChange={(type) => {
                        setType(type)
                    }}
                    type={type}
                    state={requiredState}
                    ticketsToggle={() => setTicketsToggle(!ticketsToggle)}
                ></TicketsNav>
                <div className="flex flex-row w-full h-80vh">
                    <div className="w-1/3 xl:w-2/4 h-80vh justify-around items-center">
                        <Loading size={50} color="succes" />
                    </div>
                    <div className="flex sm:w-2/3 xl:w-2/4 w-full h-80vh justify-around items-center">
                        <Loading color="succes" size={100} />
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="flex flex-row w-screen h-full flex-wrap">
            <TicketsNav
                filterClear={() => clearFilters()}
                searchChange={(search) => setSearch(search)}
                stateChange={(state) => setRequiredState(state)}
                typeChange={(type) => setType(type)}
                type={type}
                state={requiredState}
                ticketsToggle={() => setTicketsToggle(!ticketsToggle)}
            ></TicketsNav>
            <div className="flex flex-row w-full h-80vh">
                <div
                    className={`xl:w-1/3 sm:w-2/4 w-full h-80vh ${
                        ticketsToggle ? 'block' : 'hidden sm:block'
                    } translate
                    `}
                >
                    <SimpleBar className="w-full overflow-y-auto h-full pr-3">
                        {tickets?.map((item) => (
                            <TicketInList
                                key={'TicketInList' + item.id}
                                ticketData={item}
                                ChangeTicketId={(ticket_id) =>
                                    setTicketId(ticket_id)
                                }
                            />
                        ))}
                    </SimpleBar>
                </div>
                <TicketDetail
                    ticketsToggle={ticketsToggle}
                    newMessage={newMessage}
                    key={'Ticket_detail' + ticketId}
                    ticket_id={ticketId}
                />
            </div>
        </div>
    )
}
export default TicketList
