import { useState } from "react";
import { typeUser } from "./../../types/supabaseTypes";
import { useQuery } from "react-query";
import { supabase } from "../../lib/supabaseClient";
import { TicketBasicInfo } from "../../types/supabaseTypes";
import { definitions } from "../../types/supabase";
const getTicketDetail = async (id: string) => {
    if (id !== null) {
        const { data, error } = await supabase
            .from<TicketBasicInfo>("tickets")
            .select(
                `
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
            .eq("id", id)
            .single();

        if (error) {
            throw new Error(error.message);
        }

        return data;
    } else {
        return null;
    }
};

export const fetchTickets = async () => {
    const { data, error } = await supabase
        .from<TicketBasicInfo>("tickets")
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
        .eq("state", "waiting")
        .order("created_at");

    if (error) {
        throw new Error(error.message);
    }

    return data;
};

const useTicketDetail = (id: string) => {
    return useQuery(["ticketDetail", id], () => getTicketDetail(id));
};
export default useTicketDetail;
