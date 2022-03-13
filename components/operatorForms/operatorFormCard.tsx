import moment from 'moment'
import { useRouter } from 'next/router'
import React from 'react'
import { OperatorFormValues } from '../../types/formtypes'
import { OperatorForm } from '../../types/supabaseTypes'
type operatorFomrCardProps = {
    data: OperatorForm
}

const OperatorFormCard: React.FC<operatorFomrCardProps> = ({ data }) => {
    const createdAt = moment(data.insert_at).tz('Europe/Prague', true)
    const router = useRouter()
    return (
        <div
            className={`flex flex-col max-w-sm rounded-2xl overflow-hidden dark:bg-darkLighter shadow-md cursor-pointer 
            `}
        >
            <div className="w-full" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                    {data.users.first_name + ' ' + data.users.last_name}
                </div>
                <p>{data.conviction}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    {createdAt}
                </span>
            </div>
        </div>
    )
}

export default OperatorFormCard
