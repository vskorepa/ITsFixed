import { data } from "autoprefixer";
import { useQuery } from "react-query";
import { supabase } from "../lib/supabaseClient";

const getUser = async () => {
    // const { data, error } = await supabase.from("users").select().single();
    const data = await supabase.auth.user();
    const { data: roledata, error } = await supabase
        .from("user_roles")
        .select(`role`)
        .eq("user_id", data?.id)
        .single();
    if (!data) {
        throw new Error("User not found");
    }
    return { data, roledata };
};

const useUser = () => {
    return useQuery("user", () => getUser());
};

export default useUser;
