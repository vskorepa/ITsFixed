import { data } from "autoprefixer";
import { useState } from "react";
import { typeUser } from "./../../types/supabaseTypes";
import { useMutation } from "react-query";
import { supabase } from "../../lib/supabaseClient";
import { CreateTicketType } from "../../types/supabaseTypes";
import { definitions } from "../../types/supabase";
// const userId = supabase.auth.user()!.id;
const insertTicket = async (props: CreateTicketType) => {
    const { data, error } = await supabase
        .from<CreateTicketType>("ticket")
        .insert([
            {
                ticket_type_id: props.ticket_type_id,
                user_id: "8458f094-9cb5-41fa-9ecf-b75de83bd0d3",
                description: props.description,
            },
        ]);
    if (error) {
        throw new Error(error.message);
    }
    if (!data) {
        throw new Error("Creating ticket did not succeed");
    }
    console.log(data);
    return data;
};

const useCreateTicket = (props: CreateTicketType) => {
    return useMutation("CreateTicket", () => insertTicket(props));
};
export default useCreateTicket;
