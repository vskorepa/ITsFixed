import { useEffect, useState } from "react";
import { typeUser } from "./../../types/supabaseTypes";
import { useQuery } from "react-query";
import { supabase } from "../../lib/supabaseClient";
import { TicketBasicInfo } from "../../types/supabaseTypes";
import { definitions } from "../../types/supabase";
export const SubscribeTickets = async (page: number) => {
    useEffect(() => {
        fetchTickets();
        const mySubscription = supabase
            .from("tickets")
            .on("*", () => {
                console.log("something happened....");
                fetchTickets();
            })
            .subscribe();
        return () => supabase.removeSubscription(mySubscription);
    }, []);

    async function fetchTickets() {
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
            // .order("state", { ascending: true })
            .order("created_at")
            .range((page - 1) * 20, page * 20);
        if (error) {
            throw new Error(error.message);
        }

        if (!data) {
            throw new Error("User has no Tickets");
        }

        return data;
    }
};
