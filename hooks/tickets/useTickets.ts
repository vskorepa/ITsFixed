import { useQuery } from "react-query";
import { supabase } from "../../lib/supabaseClient";

const getTickets = async () => {
    const { data, error } = await supabase.from("ticket").select(`
        id,
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
    // const getTicketType = await supabase
    //     .from("tickettype")
    //     .select()
    //     .eq("id", data.ticket_type_id);

    return data;
};

const useTickets = () => {
    return useQuery("tickets", () => getTickets());
};
export default useTickets;
