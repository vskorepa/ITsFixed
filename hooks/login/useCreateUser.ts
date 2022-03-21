import { data } from 'autoprefixer'
import { useMutation } from 'react-query'
import { supabase } from '../../lib/supabaseClient'
import { typeUser } from '../../types/supabaseTypes'

const createUser = async (myUser: typeUser, facebookAuth: boolean) => {
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

const useCreateUser = (myUser: typeUser, facebookAuth: boolean) => {
    return useMutation(() => createUser(myUser, facebookAuth), {
        onSuccess: async (data) => {
            const { data: insertData, error: insertError } = await supabase
                .from('users')
                .insert(
                    [
                        {
                            first_name: myUser.first_name,
                            last_name: myUser.last_name,
                            email: myUser.email,
                            //@ts-ignore
                            id: data.id,
                        },
                    ],
                    { returning: 'minimal' }
                )

            if (insertError) {
                throw insertError
            }
            return insertData
        },
    })
}

export default useCreateUser
