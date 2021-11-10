import { useState } from "react";
import { typeUser } from "./../../types/supabaseTypes";
import { useQuery } from "react-query";
import { supabase } from "../../lib/supabaseClient";
import { TicketBasicInfo } from "../../types/supabaseTypes";
import { definitions } from "../../types/supabase";
const getTickets = async (page: number) => {
    const { data, error } = await supabase
        .from<TicketBasicInfo>("ticket")
        .select(
            `
        id,
        isalive,
        description,
        created_at,
        tickettype(
            name,
            description
        ),
        users(
            name,
            email
        )

    `
        )
        .order("isalive", { ascending: false })
        .order("created_at")
        .range((page - 1) * 20, page * 20);

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
