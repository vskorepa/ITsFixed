import { data } from 'autoprefixer'
import { useMutation } from 'react-query'
import { supabase } from '../../lib/supabaseClient'
import { typeUser } from '../../types/supabaseTypes'

const createUser = async (myUser: typeUser, facebookAuth: boolean) => {
    // const { data: userWithEmail } = await supabase
    //     .from("users")
    //     .select("*")
    //     .eq("email", user.email)
    //     .single();

    // if (userWithEmail) {
    //     throw new Error("User with this email exists");
    // }
    if (facebookAuth) {
    } else {
        const { user, error: SighUpError } = await supabase.auth.signUp({
            email: myUser.email,
            password: myUser.password,
        })
        if (SighUpError) {
            throw SighUpError
        }

        return user
    }
}

// console.log(SighUpError?.code);
// if (SighUpError?.code == "23505") {
//     throw new Error("User with this email exists");
// }

const useCreateUser = (myUser: typeUser, facebookAuth: boolean) => {
    return useMutation(() => createUser(myUser, facebookAuth), {
        onSuccess: async (data) => {
            const { data: insertData, error: insertError } = await supabase
                .from('users')
                .insert({
                    first_name: myUser.first_name,
                    last_name: myUser.last_name,
                    email: myUser.email,
                    //@ts-ignore
                    id: data.id,
                })
            if (insertError) {
                throw insertError
            }
            return insertData
        },
    })
}

export default useCreateUser
