import { typeUser } from "./../../types/supabaseTypes";
import { useQuery } from "react-query";
import { supabase } from "../../lib/supabaseClient";
import { TicketBasicInfo } from "../../types/supabaseTypes";
import { definitions } from "../../types/supabase";
const getTickets = async () => {
    const { data, error } = await supabase.from<TicketBasicInfo>("ticket")
        .select(`
        id,
        isalive,
        description,
        tickettype(
            name,
            description
        ),
        users(
            name,
            email
        )

    `);

    if (error) {
        throw new Error(error.message);
    }

    if (!data) {
        throw new Error("User has no Tickets");
    }
    return data;
};

const useTickets = () => {
    return useQuery("tickets", () => getTickets());
};
export default useTickets;
