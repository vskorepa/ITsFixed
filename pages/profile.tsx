import React from 'react'
import type { NextApiRequest, NextPage } from 'next'
import { Avatar, Loading } from '@nextui-org/react'
import useUser from '../hooks/useUser'
import { supabase } from '../lib/supabaseClient'

const Home: NextPage = () => {
    const { data, isLoading } = useUser()
    console.log(data)
    return (
        <div className="h-85vh w-full flex flex-nowrap">
            {isLoading ? (
                <Loading />
            ) : (
                <div className="w-full">
                    <div className="flex h-auto p-2 w-full justify-center items-center">
                        <Avatar
                            src="/avatar1.png"
                            color="#4F98CA"
                            bordered
                            size={250}
                        />
                    </div>
                    <div className="w-full h-auto flex text-2xl flex-wrap gap-3">
                        <div className="flex h-10 justify-center gap-4 w-full">
                            <h2>{data?.userData?.first_name}</h2>
                            <h2>{data?.userData?.last_name}</h2>
                        </div>
                        <div className="flex flex-col items-center w-full">
                            <h2>{data?.roledata?.role}</h2>
                            <h2>{data?.data.email}</h2>
                        </div>
                    </div>
                </div>
            )}
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
