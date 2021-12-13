import { useMutation } from "react-query";
import { supabase } from "../../lib/supabaseClient";
import { SignInValues } from "../../types/formtypes";

const login = async ({ email, password }: SignInValues) => {
    const { data, error } = await supabase.auth.signIn({ email, password });
    console.log(email);
    console.log(password);
    if (error) {
        throw new Error(error.message);
    }

    return data;
};

const useLogin = ({ email, password }: SignInValues) => {
    return useMutation(
        "login",
        () => login({ email, password })
        // , {
        // onSuccess: async (data) => {
        //     const { data: userData, error: userError } = await supabase
        //         .from("users")
        //         .select()
        //         .single();

        //     if (userError) {
        //         throw userError;
        //     }
        //     return userData;
        // },
        // }
    );
};

export default useLogin;
