import { useQuery } from 'react-query'
import { supabase } from '../../lib/supabaseClient'
import { definitions } from '../../types/supabase'
const getMessages = async (ticket_id: string) => {
    if (ticket_id !== '') {
        const { data, error } = await supabase
            .from<definitions['messages']>('messages')
            .select(
                `
            id,
            ticket_id,
            insert_at,
            message,
            user_id
    `
            )
            .eq('ticket_id', ticket_id)
            .order('insert_at')

        if (error) {
            throw new Error(error.message)
        }

        if (!data) {
            throw new Error('No messages')
        }
        console.log(data)

        return data
    }
}

const useMessages = (ticket_id: string) => {
    return useQuery(['messeges', ticket_id], () => getMessages(ticket_id))
}
export default useMessages
