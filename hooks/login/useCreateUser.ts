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
    console.log(data);
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
                    name: user.name,
                    surname: user.surname,
                    email: user.email,
                    id: data.id,
                });
            console.log(insertData);
            if (insertError) {
                throw insertError;
            }
            return insertData;
        },
    });
};

export default useCreateUser;
