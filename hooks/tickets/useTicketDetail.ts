import { useState } from "react";
import { typeUser } from "./../../types/supabaseTypes";
import { useQuery } from "react-query";
import { supabase } from "../../lib/supabaseClient";
import { TicketBasicInfo } from "../../types/supabaseTypes";
import { definitions } from "../../types/supabase";
const getTicketDetail = async (id: string) => {
    const { data, error } = await supabase
        .from<TicketBasicInfo>("ticket")
        .select(
            `
        *
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
        .eq("id", id)
        .single();

    if (error) {
        throw new Error(error.message);
    }

    return data;
};

const useTicketDetail = (id: string) => {
    return useQuery("ticketDetail", () => getTicketDetail(id));
};
export default useTicketDetail;
