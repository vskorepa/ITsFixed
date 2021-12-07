import { useState } from "react";
import { typeUser } from "./../../types/supabaseTypes";
import { useQuery } from "react-query";
import { supabase } from "../../lib/supabaseClient";
import { TicketBasicInfo } from "../../types/supabaseTypes";
import { definitions } from "../../types/supabase";
const getTickets = async (page: number) => {
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
        .order("state", { ascending: false })
        .order("created_at")
        // .eq("isalive", true)
        .range((page - 1) * 20, page * 20);

    console.log(data);
    if (error) {
        throw new Error(error.message);
    }

    if (!data) {
        throw new Error("User has no Tickets");
    }

    const response = {
        meta: {
            success: true,
            totalCount: data.length,
            pageCount: Math.ceil(data.length / 9),
            currentPage: page,
            perPage: 9,
        },
        ticketData: data,
    };
    return response;
};

const useTickets = (page: number) => {
    return useQuery("tickets", () => getTickets(page));
};
export default useTickets;
