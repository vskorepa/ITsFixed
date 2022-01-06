import { useState } from 'react'
import { typeUser } from './../../types/supabaseTypes'
import { useQuery } from 'react-query'
import { supabase } from '../../lib/supabaseClient'
import { TicketBasicInfo } from '../../types/supabaseTypes'
import { definitions } from '../../types/supabase'
const getTickets = async (requiredState: string, ticket_Id: string) => {
    const { data, error } = await supabase
        .from<TicketBasicInfo>('tickets')
        .select(
            `
            id,
            state,
            description,
            created_at,
            ticket_type(
                name,
                description
            ),
            users:user_id(
                first_name,
                email
            )
    
        `
        )
        .eq('state', requiredState)
        .order('created_at')

    if (error) {
        throw new Error(error.message)
    }

    if (!data) {
        throw new Error('User has no Tickets')
    }

    const { data: messagesData, error: messagesError } = await supabase
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
        .order('insert_at')

    console.log(messagesData)
    return { ticketData: data, messageData: messagesData ?? [] }
}
const state = ['waiting']
export const stateChanger = (newState: string) => {
    state.length = 0
    state.push(newState)
}

const useTickets = (ticket_id: string) => {
    return useQuery(['tickets', { state }], () =>
        getTickets(state[0], ticket_id)
    )
}
export default useTickets
