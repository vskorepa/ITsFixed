import { useState } from "react";
import { typeUser } from "./../../types/supabaseTypes";
import { useQuery } from "react-query";
import { supabase } from "../../lib/supabaseClient";
import { TicketBasicInfo } from "../../types/supabaseTypes";
import { definitions } from "../../types/supabase";
const getTicketDetail = async (id: string) => {
    if (id !== null) {
        const { data, error } = await supabase
            .from<TicketBasicInfo>("ticket")
            .select(
                `
        description,
        isalive,
        
        tickettype(
            name,
            description
        ),
        users(
            name,
            surname,
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

const useTicketDetail = (id: string) => {
    return useQuery(["ticketDetail", id], () => getTicketDetail(id));
};
export default useTicketDetail;
