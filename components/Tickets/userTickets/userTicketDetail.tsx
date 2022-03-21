import { Loading, Text } from '@nextui-org/react'
import React, { useEffect, useState } from 'react'
import useTranslation from 'next-translate/useTranslation'
import { definitions } from '../../../types/supabase'
import useMessages from '../../../hooks/messages/useGetMessages'
import useTicketDetail from '../../../hooks/tickets/useTicketDetail'
import useUpdateTicket from '../../../hooks/tickets/useUpdateTicket'
import Chat from '../../messages/chat'
import { supabase } from '../../../lib/supabaseClient'

type TicketDetailProps = {
    ticket_id?: string
}

const UserTicketDetail: React.FC<TicketDetailProps> = ({ ticket_id }) => {
    const { t } = useTranslation('common')
    const { data: message } = useMessages(ticket_id ?? '')
    const [messages, setMessages] = useState<definitions['messages'][]>([])
    const [newMessage, setNewMessage] = useState<definitions['messages']>()

    useEffect(() => {
        const UserMessageSubscription = supabase
            .from<definitions['messages']>('messages')
            .on('INSERT', (payload) => {
                setNewMessage(payload.new)
            })
            .subscribe()

        return () => {
            supabase.removeSubscription(UserMessageSubscription)
        }
    }, [])

    useEffect(() => {
        if (newMessage && newMessage.ticket_id == ticket_id) {
            if (messages.length === 0) {
                setMessages([...(message ?? []), newMessage])
            } else {
                if (messages[messages.length - 1].id !== newMessage.id) {
                    setMessages([...(messages ?? []), newMessage])
                }
            }
        } else {
            setMessages(message ?? [])
        }
    }, [message, newMessage, ticket_id])

    const { data, isLoading, isError } = useTicketDetail(ticket_id ?? '')

    if (ticket_id === null) {
        return <div className="h-80vh w-full"></div>
    }

    return (
        <div className="h-85vh w-2/3">
            {!isError ? (
                <div className="h-30vh w-full justify-center">
                    <div className="flex flex-nowrap justify-between p-3 items-center">
                        {isLoading ? (
                            <Loading />
                        ) : (
                            <Text color="success">
                                {t('ticketNumber')} {data?.id ?? ''}
                            </Text>
                        )}

                        <div className="flex-wrap flex gap-2 items-center">
                            {isLoading ? (
                                <Loading size="medium" />
                            ) : (
                                <Text weight="bold">
                                    {data
                                        ? t(`${data?.state}`)
                                        : 'Ticket state:'}
                                </Text>
                            )}
                        </div>
                    </div>

                    <Text>{data?.users.first_name}</Text>
                    <Text>{data?.users.last_name}</Text>
                    <Text>{data?.users.email}</Text>

                    <Text>{data?.description}</Text>
                </div>
            ) : (
                <div className="h-30vh w-full justify-center">
                    <Text color="warning">
                        {t('ticketNumber')} {'invalid ticket id'}
                    </Text>
                </div>
            )}

            <div className="container h-auto bg-lightDarker border-white rounded-3xl mr-4 border-2 dark:border-darkLighter dark:bg-darkDarker ">
                <Chat
                    disabled={data?.state == 'done'}
                    MessagesData={messages ?? []}
                    key={'TicketChat' + ticket_id}
                    id={ticket_id ?? ''}
                />
            </div>
        </div>
    )
}
export default UserTicketDetail
