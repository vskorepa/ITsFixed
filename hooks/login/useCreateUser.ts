import { data } from "autoprefixer";
import { useMutation } from "react-query";
import { supabase } from "../../lib/supabaseClient";
import { typeUser } from "../../types/supabaseTypes";

const createUser = async (user: typeUser) => {
    const { data: userWithEmail } = await supabase
        .from("users")
        .select("*")
        .eq("email", user.email)
        .single();

    if (userWithEmail) {
        throw new Error("User with this email exists");
    }

    const { data, error: SighUpError } = await supabase.auth.signUp({
        email: user.email,
        password: user.password,
    });
    if (SighUpError) {
        throw SighUpError;
    }

    return data;
};

const useCreateUser = (user: typeUser) => {
    return useMutation(() => createUser(user), {
        onSuccess: async (data) => {
            const { data: insertData, error: insertError } = await supabase
                .from("users")
                .insert({
                    first_name: user.first_name,
                    last_name: user.last_name,
                    email: user.email,
                    //@ts-ignore
                    id: data.id,
                });
            if (insertError) {
                throw insertError;
            }
            return insertData;
        },
    });
};

export default useCreateUser;
