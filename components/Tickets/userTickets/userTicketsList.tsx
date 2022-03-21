import { Button, Loading } from '@nextui-org/react'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import useUsersTickets from '../../../hooks/tickets/useUsersTickets'
import { supabase } from '../../../lib/supabaseClient'
import { TicketBasicInfo } from '../../../types/supabaseTypes'
import CreateTicket from '../CreateTicket/CreateTicket'
import UserTicketCard from './userTicketCard'
const UserTicketList: React.FC = () => {
    const [tickets, setTickets] = useState<TicketBasicInfo[]>()
    const [visible, setVisible] = useState(false)
    const router = useRouter()
    const { data, isLoading, refetch } = useUsersTickets()
    useEffect(() => {
        const TicketSubscription = supabase
            .from<TicketBasicInfo>('tickets')
            .on('INSERT', (payload) => {
                router.push({
                    pathname: '/ticket',
                    query: 'TicketId=' + payload.new.id,
                })
            })
            .on('UPDATE', () => {
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

    if (isLoading) {
        return (
            <div className="flex flex-row w-screen h-85vh flex-wrap">
                <div className="flex flex-row w-full h-85vhh">
                    <div className="w-1/3 h-85vh justify-around items-center">
                        <Loading size={50} color="succes" />
                    </div>
                    <div className="flex w-2/3 h-85vh justify-around items-center">
                        <Loading color="succes" size={100} />
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="flex flex-col w-screen h-85vh flex-wrap items-center">
            <div className="flex flex-col w-full h-85vh overflow-auto items-center">
                <div className=" flex w-full justify-items-center justify-center p-4">
                    <Button onClick={() => setVisible(!visible)}>
                        Create ticket
                    </Button>
                    <CreateTicket
                        visible={visible}
                        close={() => setVisible(false)}
                    />
                </div>
                <div className="w-full items-center p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-14">
                    {tickets?.map((item) => (
                        <div
                            key={item.id}
                            className="w-full h-full flex-col justify-center items-center"
                        >
                            <UserTicketCard key={item.id} data={item} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default UserTicketList
