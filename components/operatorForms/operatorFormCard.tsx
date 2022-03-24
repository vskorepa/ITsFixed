import moment from 'moment'
import 'moment-timezone'
import React from 'react'
import { AiOutlineCheckSquare, AiOutlineCloseSquare } from 'react-icons/ai'
import useAcceptNewOperator from '../../hooks/operatorForms/useAcceptNewOperator'
import useDeclinNewOperator from '../../hooks/operatorForms/useDeclineNewOperator'
import { OperatorForm } from '../../types/supabaseTypes'
type operatorFomrCardProps = {
    data: OperatorForm
    refetch: () => void
}

const OperatorFormCard: React.FC<operatorFomrCardProps> = ({
    data,
    refetch,
}) => {
    const createdAt = moment(data.insert_at).tz('Europe/Prague', true)
    console.log(data)
    const acceptOperatorMutation = useAcceptNewOperator(data.user_id)
    const declineOperatorMutation = useDeclinNewOperator(data.user_id)
    if (acceptOperatorMutation.isSuccess || declineOperatorMutation.isSuccess)
        refetch()
    return (
        <div
            className={`flex flex-col max-w-sm rounded-2xl overflow-hidden dark:bg-darkLighter shadow-md 
            `}
        >
            <div className="w-full" />
            <div className="px-6 py-4">
                <div className="flex flex-ror justify-between">
                    <div className="font-bold text-xl mb-2">
                        {data.users.first_name + ' ' + data.users.last_name}
                    </div>
                    <div className="flex flex-row text-3xl">
                        <AiOutlineCheckSquare
                            onClick={() => acceptOperatorMutation.mutate()}
                            className="text-primary cursor-pointer active:translate-y-0.5"
                        />
                        <AiOutlineCloseSquare
                            onClick={() => declineOperatorMutation.mutate()}
                            className="text-red-500 cursor-pointer active:translate-y-0.5"
                        />
                    </div>
                </div>
                <a
                    className="text-primary dark:hover:text-light hover:text-dark"
                    target="_blank"
                    rel="noreferrer"
                    href={
                        process.env.NEXT_PUBLIC_SUPABASE_URL +
                        '/storage/v1/object/public/cv-files/' +
                        data.user_id
                    }
                >
                    CV PDF file link
                </a>
                <p>{data.conviction}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    {createdAt.calendar()}
                </span>
            </div>
        </div>
    )
}

export default OperatorFormCard
