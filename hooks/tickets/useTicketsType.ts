import { useQuery } from "react-query";
import { supabase } from "../../lib/supabaseClient";
import { TicketBasicInfo } from "../../types/supabaseTypes";
import { definitions } from "./../../types/supabase";

const getTickets = async () => {
    const { data, error } = await supabase
        .from<definitions["ticket_type"]>("ticket_type")
        .select(
            `
        id,
        name,
        description
    `
        );

    console.log(data);
    if (error) {
        throw new Error(error.message);
    }

    if (!data) {
        throw new Error("There are no ticket types");
    }

    return data;
};

const useTickets = () => {
    return useQuery("tickets", () => getTickets());
};
export default useTickets;
