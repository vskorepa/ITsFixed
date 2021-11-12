import { useQuery } from "react-query";
import { supabase } from "../lib/supabaseClient";

const getUser = async (userId: string) => {
    const { data, error } = await supabase
        .from("users")
        .select()
        .eq("id", userId)
        .single();

    if (error) {
        throw new Error(error.message);
    }
    if (!data) {
        throw new Error("User not found");
    }

    return data;
};

const useUser = () => {
    const user = supabase.auth.user();
    return useQuery("user", () => getUser(user?.id));
};

export default useUser;
