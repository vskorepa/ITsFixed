import { Loading, Text } from '@nextui-org/react'
import React, { useEffect, useState } from 'react'
import useTranslation from 'next-translate/useTranslation'
import useTicketDetail from '../../hooks/tickets/useTicketDetail'
import useUpdateTicket from '../../hooks/tickets/useUpdateTicket'
import Chat from '../messages/chat'
import { definitions } from '../../types/supabase'
import useMessages from '../../hooks/messages/useGetMessages'

type TicketDetailProps = {
    ticket_id: string
    newMessage?: definitions['messages']
    ticketsToggle: boolean
}

const TicketDetail: React.FC<TicketDetailProps> = ({
    ticket_id,
    newMessage,
    ticketsToggle,
}) => {
    const { t } = useTranslation('common')
    const { data: message } = useMessages(ticket_id)
    const [messages, setMessages] = useState<definitions['messages'][]>([])
    const [ticketState, setTicketState] = useState('')
    useEffect(() => {
        if (newMessage && newMessage.ticket_id == ticket_id) {
            if (messages.length === 0) {
                setMessages([...(message ?? [])])
            } else {
                if (messages[messages.length - 1].id !== newMessage.id) {
                    setMessages([...(messages ?? []), newMessage])
                }
            }
            if (message?.length === 0) {
                setMessages([...(messages ?? []), newMessage])
            }
        } else {
            setMessages(message ?? [])
        }
    }, [message, newMessage, ticket_id])
    useEffect(() => {
        if (ticketState) {
            TicketStateChange()
        }
    }, [ticketState])
    const TicketStateChange = () => {
        TicketMutation.mutate()
    }
    const { data, isLoading, status } = useTicketDetail(ticket_id)

    const TicketMutation = useUpdateTicket({
        id: ticket_id,
        state: ticketState,
    })
    if (ticket_id === null) {
        return <div className="h-80vh w-2/3"></div>
    }
    return (
        <div
            className={`h-80vh sm:w-2/4 xl:w-2/3 ${
                ticketsToggle ? 'hidden sm:block' : 'block'
            } overflow-auto`}
        >
            <div className="h-30vh w-full justify-center">
                <div className="flex flex-nowrap justify-between p-3 items-center">
                    {isLoading ? (
                        <Loading />
                    ) : (
                        <div
                            className={`flex flex-nowrap gap-2 ${
                                status === 'error' && 'text-warning'
                            } text-primary`}
                        >
                            <p className="font-bold">Ticket Number:</p>
                            <p>{data?.id ?? 'Invalid ticket id'}</p>
                        </div>
                    )}
                    {status !== 'error' && (
                        <div className="flex-wrap flex gap-2 items-center">
                            {isLoading ? (
                                <Loading size="medium" />
                            ) : (
                                <div className="flex flex-nowrap gap-2">
                                    <select
                                        onChange={(e) => {
                                            setTicketState(e.target.value)
                                        }}
                                        defaultValue={data?.state}
                                        className="px-4 py-3 rounded-md  border-transparent focus:border-gray-500 focus:ring-0 text-sm"
                                    >
                                        <option id="waiting" value="waiting">
                                            waiting
                                        </option>
                                        <option id="ongoing" value="ongoing">
                                            ongoing
                                        </option>
                                        <option id="done" value="done">
                                            done
                                        </option>
                                    </select>
                                </div>
                            )}
                        </div>
                    )}
                </div>
                <div>
                    <div className="flex gap-2">
                        <Text>
                            <strong>{t('firstName')}: </strong>
                            {data?.users.first_name}
                        </Text>
                        <Text>
                            <strong>{t('surname')}: </strong>
                            {data?.users.last_name}
                        </Text>
                    </div>
                    <Text>
                        <strong>email: </strong>
                        {data?.users.email}
                    </Text>

                    <Text>
                        <strong>{t('description')}: </strong>
                        <br />
                        {data?.description}
                    </Text>
                </div>
            </div>
            {data && (
                <div className="w-auto h-auto bg-lightDarker border-white rounded-3xl mr-4 border-2 dark:border-darkLighter dark:bg-darkDarker ">
                    <Chat
                        disabled={data?.state == 'done'}
                        MessagesData={messages ?? []}
                        key={'TicketChat' + ticket_id}
                        id={ticket_id}
                    />
                </div>
            )}
        </div>
    )
}
export default TicketDetail
