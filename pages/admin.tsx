import React from 'react'
import type { NextApiRequest, NextApiResponse, NextPage } from 'next'
import { Text } from '@nextui-org/react'
import { supabase } from '../lib/supabaseClient'
import { definitions } from '../types/supabase'
const Home: NextPage = () => {
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
    const { data: userRole } = await supabase
        .from<definitions['user_roles']>('user_roles')
        .select(
            `
        role
    `
        )
        .eq('user_id', user?.id)
        .single()
    console.log(userRole)

    if (!user) {
        return { props: {}, redirect: { destination: '/auth/login' } }
    }
    if (userRole?.role !== 'admin') {
        return { props: {}, redirect: { destination: '/' } }
    }

    return { props: { user } }
}

export default Home
