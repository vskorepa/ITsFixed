import { data } from "autoprefixer";
import { useState } from "react";
import { typeUser } from "../../types/supabaseTypes";
import { useMutation } from "react-query";
import { supabase } from "../../lib/supabaseClient";
import { UpdateStateProps } from "../../types/supabaseTypes";
import { definitions } from "../../types/supabase";
// const userId = supabase.auth.user()!.id;
const updateTicket = async (props: UpdateStateProps) => {
    console.log(props);
    const { data, error } = await supabase
        .from<UpdateStateProps>("tickets")
        .update({
            state: props.state,
        })
        .eq("id", props.id);
    if (error) {
        throw new Error(error.message);
    }
    if (!data) {
        throw new Error("Updating ticket did not succeed");
    }
    console.log(data);
    return data;
};

const useUpdateTicket = (props: UpdateStateProps) => {
    return useMutation(["UpdateTicketState", props.id], () =>
        updateTicket(props)
    );
};
export default useUpdateTicket;
