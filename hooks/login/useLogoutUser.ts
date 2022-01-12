import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { supabase } from '../../lib/supabaseClient'

const useLogout = async () => {
    const { error } = await supabase.auth.signOut()

    if (error) {
        throw new Error(error.message)
    }
}

const useLogoutUser = () => {
    const router = useRouter()
    const QueryClient = useQueryClient()
    return useMutation(() => useLogout(), {
        onSuccess: () => {
            QueryClient.removeQueries()
            router.push('/auth/login')
        },
    })
}
export default useLogoutUser
