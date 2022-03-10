import React, { useEffect, useState } from 'react'
import type { NextApiRequest, NextApiResponse, NextPage } from 'next'
import { Loading, Text } from '@nextui-org/react'
import { supabase } from '../lib/supabaseClient'
import { definitions } from '../types/supabase'
import { useRouter } from 'next/router'
const Home: NextPage = () => {
    const [loading, setLoading] = useState(true)
    const router = useRouter()
    useEffect(() => {
        getUserRole()
    }, [])

    const getUserRole = async () => {
        const { data: userRole } = await supabase
            .from<definitions['user_roles']>('user_roles')
            .select(
                `
            role
            `
            )
            .eq('user_id', supabase.auth.user()?.id)
            .single()
        if (userRole?.role !== 'admin') {
            router.push('/')
        } else {
            setLoading(false)
        }
    }
    if (loading) {
        return (
            <div>
                <div className="text-center">
                    <Text className="text-sandy font-bold text-4xl" h1>
                        ADMIN Page
                    </Text>
                    <Loading size={30} />
                </div>
            </div>
        )
    }
    return (
        <div>
            <div className="text-center">
                <Text className="text-sandy font-bold text-4xl" h1>
                    ADMIN Page
                </Text>
            </div>
        </div>
    )
}

export const getServerSideProps = async ({ req }: any) => {
    const { user } = await supabase.auth.api.getUserByCookie(req)

    if (!user) {
        return { props: {}, redirect: { destination: '/auth/login' } }
    }

    return { props: { user } }
}

export default Home
