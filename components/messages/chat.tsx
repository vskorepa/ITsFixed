import React, { useEffect, useRef, useState } from 'react'
import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.css'
import { SendMassageForm } from '../ReactHookForm/Forms'
import { SentMessage, RecievedMessage } from './message'
import { SubmitHandler } from 'react-hook-form'
import useSendMessage from '../../hooks/messages/sendMessage'
import { supabase } from '../../lib/supabaseClient'
import { definitions } from '../../types/supabase'
import useMessages from '../../hooks/messages/useGetMessages'
import { useRouter } from 'next/router'
import { RealtimeSubscription } from '@supabase/supabase-js'

type chatProps = {
    id: string
}

const Chat: React.FC<chatProps> = ({ id }) => {
    // const [chatData, setChatData] = useState<definitions['messages'][]>([])
    const { data: chatData, isLoading, refetch } = useMessages(id)
    const messageBottom = useRef<HTMLDivElement>(null)
    const router = useRouter()
    useEffect(() => {
        // getMessages(id)
        const MessageSubscription = supabase
            .from<definitions['messages']>('messages')
            .on('INSERT', (message) => {
                refetch()
                // const newArr = [...chatData, message.new]
                // setChatData(newArr)
            })
        if (!supabase.getSubscriptions()) {
            console.log('SUBSCRIBE to MESSAGES')
            MessageSubscription.subscribe()
        }

        async function removeMessageSubscription(
            MessageSubscription: RealtimeSubscription
        ) {
            await supabase.removeSubscription(MessageSubscription)
        }
        return () => {
            console.log('Removed Subscription')
            supabase.removeAllSubscriptions()
            removeMessageSubscription(MessageSubscription.subscription)
            console.log(supabase.getSubscriptions())
        }
    }, [])
    useEffect(() => {
        messageBottom.current?.scrollIntoView({})
    }, [chatData])
    // const getMessages = async (id: string) => {
    //     const { data } = await supabase
    //         .from<definitions['messages']>('messages')
    //         .select(
    //             `
    //                 id,
    //                 ticket_id,
    //                 insert_at,
    //                 message,
    //                 user_id
    //                 `
    //         )
    //         .eq('ticket_id', id)
    //         .order('insert_at')
    //     setChatData(data!)
    //  }

    const [message, setMessage] = useState('')
    const [ticket_id, setTicket_id] = useState('')

    const onSubmit: SubmitHandler<definitions['messages']> = (data) => {
        setMessage(data.message ?? '')
        setTicket_id(id)
        SendMessageMutation.mutate()
    }
    console.log(supabase.getSubscriptions())

    const SendMessageMutation = useSendMessage({
        message: message,
        ticket_id: ticket_id,
    })
    return (
        <div className="h-49vh flex flex-col justify-end gap-2">
            <SimpleBar className="w-full flex flex-col max-h-45vh short:max-h-40vh overflow-y-auto">
                {chatData
                    ? chatData.map((message) => {
                          return message.user_id == supabase.auth.user()?.id ? (
                              <SentMessage
                                  id={String(message.id)}
                                  key={message.id}
                                  content={message.message ?? ''}
                              />
                          ) : (
                              <RecievedMessage
                                  id={String(message.id)}
                                  key={message.id}
                                  content={message.message ?? ''}
                              />
                          )
                      })
                    : ''}
                <div ref={messageBottom}></div>
            </SimpleBar>
            <SendMassageForm OnFormSubmit={(data) => onSubmit(data)} />
        </div>
    )
}

export default Chat
