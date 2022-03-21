import React, { useEffect, useRef, useState } from 'react'
import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.css'
import { SendMassageForm } from '../ReactHookForm/Forms'
import { SentMessage, RecievedMessage } from './message'
import { SubmitHandler } from 'react-hook-form'
import useSendMessage from '../../hooks/messages/useSendMessage'
import { supabase } from '../../lib/supabaseClient'
import { definitions } from '../../types/supabase'

type chatProps = {
    id: string
    MessagesData: definitions['messages'][]
    disabled?: boolean
}

const Chat: React.FC<chatProps> = ({ id, MessagesData, disabled }) => {
    const messageBottom = useRef<HTMLDivElement>(null)
    useEffect(() => {
        messageBottom.current?.scrollIntoView({})
    }, [MessagesData])

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
        <div className="h-49vh flex flex-col justify-end gap-2">
            <SimpleBar className="w-full flex flex-col max-h-45vh short:max-h-40vh overflow-y-auto">
                {MessagesData
                    ? MessagesData.map((message) => {
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
            <SendMassageForm
                disabled={disabled}
                isSending={SendMessageMutation.isLoading ?? false}
                OnFormSubmit={(data) => onSubmit(data)}
            />
        </div>
    )
}

export default Chat
