import React, { useEffect } from 'react'
import type { NextPage } from 'next'
import { Loading, Text } from '@nextui-org/react'
import { supabase } from '../lib/supabaseClient'
import { useRouter } from 'next/router'
import OperatorFormList from '../components/operatorForms/operatorFormsList'
import useUser from '../hooks/useUser'
const Home: NextPage = () => {
    const router = useRouter()
    const { data, isLoading } = useUser()

    useEffect(() => {
        if (!isLoading) {
            if (data?.roledata?.role !== 'admin') {
                router.push('/')
            }
        }
    }, [])

    if (isLoading) {
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
            <div>
                <OperatorFormList key={data?.data.id} />
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
