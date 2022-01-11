import React from 'react'
import type { NextPage } from 'next'
import { Avatar, Loading } from '@nextui-org/react'
import TopNav from '../components/Nav/topNav'
import AuthProtectedWrapper from '../components/protected/UserProtected'
import useUser from '../hooks/useUser'

const Home: NextPage = () => {
    const { data, isLoading } = useUser()
    console.log(data)
    return (
        <AuthProtectedWrapper role="user">
            <TopNav />
            <div className="h-85vh w-full flex flex-nowrap">
                {isLoading ? (
                    <Loading />
                ) : (
                    <div className="w-1/3 ">
                        <div className="flex h-auto p-2 w-full justify-center items-center">
                            <Avatar
                                src="/avatar1.png"
                                color="#4F98CA"
                                bordered
                                size={250}
                            />
                        </div>
                        <div className="w-full h-auto flex text-2xl flex-wrap gap-3">
                            <div className="flex h-10 justify-evenly w-full">
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

                <div className="w-2/3 "></div>
            </div>
        </AuthProtectedWrapper>
    )
}

export default Home
