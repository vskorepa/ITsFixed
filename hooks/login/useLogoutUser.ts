import { useMutation, useQueryClient } from "react-query";
import { supabase } from "../../lib/supabaseClient";

const logout = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
        throw new Error(error.message);
    }
};

const useLogoutUser = () => {
    const QueryClient = useQueryClient();
    return useMutation(() => logout(), {
        onSuccess: () => {
            QueryClient.removeQueries();
        },
    });
};
export default useLogoutUser;
