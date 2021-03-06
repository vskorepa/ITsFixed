import { useState } from 'react'
import { typeUser } from './../../types/supabaseTypes'
import { useQuery } from 'react-query'
import { supabase } from '../../lib/supabaseClient'
import { TicketBasicInfo } from '../../types/supabaseTypes'
const getTicketDetail = async (id: string) => {
    if (id) {
        const { data, error } = await supabase
            .from<TicketBasicInfo>('tickets')
            .select(
                `
                id,
        description,
        state,
        ticket_type(
            name,
            description
        ),
        users:user_id(
            first_name,
            last_name,
            email
        )
    `
            )
            .eq('id', id)
            .single()

        if (error) {
            throw new Error(error.message)
        }

        return data
    } else {
        return null
    }
}

const useTicketDetail = (id: string) => {
    return useQuery(['ticketDetail', id], () => getTicketDetail(id))
}
export default useTicketDetail
