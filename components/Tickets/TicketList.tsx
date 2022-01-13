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
    const [type, setType] = useState(0)

    const { data, isLoading, refetch } = useTickets(requiredState, type, search)
    const [newMessage, setNewMessage] = useState<definitions['messages']>()
    const clearFilters = () => {
        setType(0)
        setRequiredState('waiting')
    }
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
        console.log('subscribe')

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
                        setRequiredState(state), console.log(state)
                    }}
                    searchChange={(search) => {
                        setSearch(search), console.log(search)
                    }}
                    typeChange={(type) => {
                        setType(type), console.log(type)
                    }}
                    type={type}
                    state={requiredState}
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
                filterClear={() => clearFilters()}
                searchChange={(search) => setSearch(search)}
                stateChange={(state) => setRequiredState(state)}
                typeChange={(type) => setType(type)}
                type={type}
                state={requiredState}
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
