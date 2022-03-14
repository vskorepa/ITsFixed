import { Button, Loading } from '@nextui-org/react'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import useGetOperatorForms from '../../hooks/operatorForms/useGetOperatorForms'
import OperatorFormCard from './operatorFormCard'

const OperatorFormList: React.FC = () => {
    const [visible, setVisible] = useState(false)
    const router = useRouter()
    const { data, isLoading, refetch } = useGetOperatorForms()

    if (isLoading) {
        return (
            <div className="flex flex-row w-screen h-85vh flex-wrap">
                <div className="flex flex-row w-full h-85vhh">
                    <div className="w-1/3 h-85vh justify-around items-center">
                        <Loading size={50} color="succes" />
                    </div>
                    <div className="flex w-2/3 h-85vh justify-around items-center">
                        <Loading color="succes" size={100} />
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="flex flex-col w-screen h-85vh flex-wrap items-center">
            <div className="flex flex-col w-full h-85vh overflow-auto items-center">
                <div className=" flex w-full justify-items-center justify-center p-4"></div>
                <div className="w-full p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-14">
                    {data?.map((item) => (
                        <div
                            key={item.id}
                            className="w-full h-full flex-col justify-around items-center"
                        >
                            <OperatorFormCard key={item.id} data={item} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default OperatorFormList
