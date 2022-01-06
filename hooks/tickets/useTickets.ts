import { useState } from 'react'
import { typeUser } from './../../types/supabaseTypes'
import { useQuery } from 'react-query'
import { supabase } from '../../lib/supabaseClient'
import { TicketBasicInfo } from '../../types/supabaseTypes'
import { definitions } from '../../types/supabase'
const getTickets = async (requiredState: string) => {
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
    console.log(data)

    return data
}
const state = ['waiting']
export const stateChanger = (newState: string) => {
    state.length = 0
    state.push(newState)
}

const useTickets = () => {
    return useQuery(['tickets', { state }], () => getTickets(state[0]))
}
export default useTickets
