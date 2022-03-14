import { CreateTicketValues } from './../../types/formtypes'
import { data } from 'autoprefixer'
import { useState } from 'react'
import { typeUser } from './../../types/supabaseTypes'
import { useMutation } from 'react-query'
import { supabase } from '../../lib/supabaseClient'
import { CreateTicketProps } from '../../types/supabaseTypes'

import { definitions } from '../../types/supabase'
// const userId = supabase.auth.user()!.id;
const insertTicket = async (props: CreateTicketValues) => {
    const { data, error } = await supabase
        .from<CreateTicketProps>('tickets')
        .insert([
            {
                ticket_type_id: props.ticket_type_id,
                user_id: supabase.auth.user()?.id,
                description: props.description,
            },
        ])
    if (error) {
        throw new Error(error.message)
    }
    if (!data) {
        throw new Error('Creating ticket did not succeed')
    }
    return data
}

const useCreateTicket = (props: CreateTicketValues) => {
    return useMutation(['CreateTicket', props.description], () =>
        insertTicket(props)
    )
}
export default useCreateTicket
