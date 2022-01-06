import React, { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabaseClient'

import { useRouter } from 'next/router'
import TicketInList from './TicketInList'
import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.css'
import TicketDetail from './TicketDetail'
import { TicketBasicInfo } from '../../types/supabaseTypes'
import TicketsNav from '../Nav/TicketsNav'
import useTickets, { stateChanger } from '../../hooks/tickets/useTickets'
import { Loading } from '@nextui-org/react'
import { definitions } from '../../types/supabase'

const TicketList: React.FC = () => {
    const [tickets, setTickets] = useState<TicketBasicInfo[]>()
    const router = useRouter()
    const [requiredState, setRequiredState] = useState('waiting')
    const { data, isLoading, refetch } = useTickets(router.query.ticketId ?? '')

    useEffect(() => {
        const TicketSubscription = supabase
            .from<TicketBasicInfo>('tickets')
            .on('*', (payload) => {
                // data?.push(payload.new)
                console.log('NEW TICKET CALLBACK')

                refetch()
            })
            .subscribe()

        return () => {
            supabase.removeSubscription(TicketSubscription)
        }
    }, [])
    useEffect(() => {
        const MessageSubscription = supabase
            .from<definitions['messages']>('messages')
            .on('INSERT', (payload) => {
                // data?.push(payload.new)
                console.log('NEW MESSAGE CALLBACK')
                refetch()
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
                        setRequiredState(state), stateChanger(state)
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
                stateChange={(state) => {
                    setRequiredState(state), stateChanger(state)
                }}
            ></TicketsNav>
            <div className="flex flex-row w-full h-80vh">
                <div className="w-1/3 h-80vh">
                    <SimpleBar className="w-full overflow-y-auto h-full pr-3">
                        {data?.ticketData?.map((item) => (
                            <TicketInList
                                key={'TicketInList' + item.id}
                                ticketData={item}
                            />
                        ))}
                    </SimpleBar>
                </div>
                <TicketDetail
                    messagesData={data?.messageData ?? []}
                    //@ts-ignore
                    // key={'TicketDetailList' + router.query.ticketId ?? ''}
                    //@ts-ignore
                    id={router.query.ticketId ?? ''}
                />
            </div>
        </div>
    )
}
export default TicketList
