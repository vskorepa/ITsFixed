import { useState } from 'react'
import { typeUser } from './../../types/supabaseTypes'
import { Query, useQuery } from 'react-query'
import { supabase } from '../../lib/supabaseClient'
import { TicketBasicInfo } from '../../types/supabaseTypes'
import { definitions } from '../../types/supabase'
const getTickets = async (
    requiredState: string,
    problemFilter?: number,
    search?: string
) => {
    let query = supabase
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

    if (problemFilter) {
        query = query.eq('ticket_type_id', problemFilter)
    }
    if (search !== '') {
        query = query.textSearch(
            'description' || '' || 'users.first_name',
            search ?? ''
        )
    }

    const { data, error } = await query

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
const problemFilter: number[] = []
const search = ['']
export const stateChanger = (
    newState?: string,
    newProblemFilter?: number,
    newSearch?: string
) => {
    if (newState) {
        state.length = 0
        state.push(newState)
    }
    if (newProblemFilter) {
        problemFilter.length = 0
        problemFilter.push(newProblemFilter)
    }
    if (newSearch) {
        search.length = 0
        search.push(newSearch)
    }
}

const useTickets = () => {
    return useQuery(['tickets', { state }], () =>
        getTickets(state[0], problemFilter[0], search[0])
    )
}
export default useTickets
