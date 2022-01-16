import { useState } from 'react'
import { typeUser } from './../../types/supabaseTypes'
import { Query, useQuery } from 'react-query'
import { supabase } from '../../lib/supabaseClient'
import { TicketBasicInfo } from '../../types/supabaseTypes'
import { definitions } from '../../types/supabase'
const getTickets = async () => {
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
        .order('created_at', { ascending: false })
        .limit(15)

    if (error) {
        throw new Error(error.message)
    }

    if (!data) {
        throw new Error('User has no Tickets')
    }
    return data
}

const useUsersTickets = () => {
    // return useQuery(['tickets', { state }], () =>
    //     getTickets(state[0], problemFilter[0], search[0])
    // )
    return useQuery('UsersTickets', () => getTickets())
}
export default useUsersTickets
