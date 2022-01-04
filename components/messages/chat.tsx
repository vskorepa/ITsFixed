import React, { useEffect, useState } from 'react'
import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.css'
import { SendMassageForm } from '../ReactHookForm/Forms'
import { SentMessage, RecievedMessage } from './message'
import { SubmitHandler } from 'react-hook-form'
import useSendMessage from '../../hooks/messages/sendMessage'
import { supabase } from '../../lib/supabaseClient'
import { definitions } from '../../types/supabase'
import useMessages from '../../hooks/messages/useGetMessages'

type chatProps = {
    id: string
}

const Chat: React.FC<chatProps> = ({ id }) => {
    const [chatData, setChatData] = useState<definitions['messages'][]>()
    // const { data: initialMessages } = useMessages(id)

    // const setupMessagesSubscription = async () => {
    //     const mySubscriptions = supabase
    //         .from<definitions['messages']>('message')
    //         .on('INSERT', ({ new: newMessage }) =>
    //             setChatData(() => [].concat([newMessage], chatData))
    //         )
    //         .subscribe()
    //     console.log(chatData)

    //     return supabase.removeSubscription(mySubscriptions)
    // }

    // useEffect(() => {
    //     setupMessagesSubscription()
    // })

    // useEffect(() => {
    //     setChatData(initialMessages)
    // })

    useEffect(() => {
        getMessages(id)
        const MessageSubscription = supabase
            .from('messages')
            .on('INSERT', () => {
                getMessages(id)
            })
            .subscribe()
        return () => {
            supabase.removeSubscription(MessageSubscription)
        }
    }, [])
    const getMessages = async (id: string) => {
        const { data, error } = await supabase
            .from<definitions['messages']>('messages')
            .select(
                `
                ticket_id,
                insert_at,
                message,
                user_id
                `
            )
            .eq('ticket_id', id)
            .order('insert_at')

        setChatData(data ?? [])
    }

    const [message, setMessage] = useState('')
    const [ticket_id, setTicket_id] = useState('')

    const onSubmit: SubmitHandler<definitions['messages']> = (data) => {
        setMessage(data.message ?? '')
        setTicket_id(id)
        SendMessageMutation.mutate()
    }

    const SendMessageMutation = useSendMessage({
        message: message,
        ticket_id: ticket_id,
    })
    return (
        <div className="h-50vh flex flex-wrap justify-around items-center">
            <SimpleBar className="w-full flex flex-col max-h-40vh overflow-y-auto mt-1 ">
                {chatData
                    ? chatData.map((message) => {
                          return message.user_id == supabase.auth.user()?.id ? (
                              <SentMessage
                                  key={message.insert_at}
                                  content={message.message ?? ''}
                              />
                          ) : (
                              <RecievedMessage
                                  key={message.insert_at}
                                  content={message.message ?? ''}
                              />
                          )
                      })
                    : ''}
            </SimpleBar>
            <SendMassageForm OnFormSubmit={(data) => onSubmit(data)} />
        </div>
    )
}

export default Chat
