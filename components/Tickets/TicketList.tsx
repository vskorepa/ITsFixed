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

const TicketList: React.FC = () => {
    const [tickets, setTickets] = useState<TicketBasicInfo[]>()
    const router = useRouter()
    const [requiredState, setRequiredState] = useState('waiting')
    const { data, isLoading, refetch } = useTickets()

    useEffect(() => {
        const Subscription = supabase
            .from<TicketBasicInfo>('tickets')
            .on('*', (payload) => {
                // data?.push(payload.new)
                refetch()
            })
            .subscribe()

        return () => {
            supabase.removeSubscription(Subscription)
        }
    }, [])

    if (isLoading) {
        return <Loading />
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
                        {data?.map((item) => (
                            <TicketInList
                                key={'TicketInList' + item.id}
                                ticketData={item}
                            />
                        ))}
                    </SimpleBar>
                </div>
                <TicketDetail
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
