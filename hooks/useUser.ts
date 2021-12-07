import { data } from "autoprefixer";
import { useQuery } from "react-query";
import { supabase } from "../lib/supabaseClient";

const getUser = async () => {
    // const { data, error } = await supabase
    //     .from("users")
    //     .select()
    //     .eq("id", userId)
    //     .single();
    const data = await supabase.auth.user();

    if (!data) {
        throw new Error("User not found");
    }

    return data;
};

const useUser = () => {
    return useQuery("user", () => getUser());
};

export default useUser;
