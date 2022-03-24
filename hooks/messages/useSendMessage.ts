import { CreateTicketValues } from '../../types/formtypes'
import { useMutation } from 'react-query'
import { supabase } from '../../lib/supabaseClient'
import { SendMessageProps } from '../../types/supabaseTypes'
import { useRouter } from 'next/router'

const sendMessage = async (props: SendMessageProps) => {
    if (props.message.trim().length > 0) {
        const { data, error } = await supabase
            .from<SendMessageProps>('messages')
            .insert([
                {
                    message: props.message,
                    user_id: supabase.auth.user()?.id,
                    ticket_id: props.ticket_id,
                },
            ])
        if (error) {
            throw new Error(error.message)
        }
        if (!data) {
            throw new Error('Sending the message failed')
        }
        return data
    }
}

const useSendMessage = (props: SendMessageProps) => {
    return useMutation(['SendMessage', props.ticket_id], () =>
        sendMessage(props)
    )
}
export default useSendMessage
