import { Button, Loading } from '@nextui-org/react'
import React, { useEffect, useState } from 'react'
import useTickets from '../../../hooks/tickets/useTickets'
import useUsersTickets from '../../../hooks/tickets/useUsersTickets'
import { supabase } from '../../../lib/supabaseClient'
import { definitions } from '../../../types/supabase'
import { TicketBasicInfo } from '../../../types/supabaseTypes'
import CreateTicket from '../CreateTicket/CreateTicket'
import UserTicketCard from './userTicketCard'
const UserTicketList: React.FC = () => {
    const [tickets, setTickets] = useState<TicketBasicInfo[]>()
    const [messages, setMessages] = useState<definitions['messages'][]>()
    const [ticketId, setTicketId] = useState('')
    const [visible, setVisible] = useState(false)

    const { data, isLoading, refetch } = useUsersTickets()
    const [newMessage, setNewMessage] = useState<definitions['messages']>()
    console.log(data)
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
        <div className="flex flex-col w-screen h-full flex-wrap">
            <div className="flex flex-col w-full h-80vh">
                <div className=" flex w-full justify-items-center justify-around">
                    <Button onClick={() => setVisible(!visible)} />
                    <CreateTicket
                        visible={visible}
                        close={() => setVisible(false)}
                    />
                </div>
                <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 items-center">
                    {tickets?.map((item) => (
                        <UserTicketCard key={item.id} data={item} />
                    ))}
                </div>
            </div>
        </div>
    )
}
export default UserTicketList
