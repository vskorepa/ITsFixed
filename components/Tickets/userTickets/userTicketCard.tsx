import moment from 'moment'
import { useRouter } from 'next/router'
import React from 'react'
import { definitions } from '../../../types/supabase'
import { TicketBasicInfo } from '../../../types/supabaseTypes'
type userTicketCardPrps = {
    data: TicketBasicInfo
}

const UserTicketCard: React.FC<userTicketCardPrps> = ({ data }) => {
    const createdAt = moment(data.created_at).tz('Europe/Prague', true)
    const router = useRouter()
    return (
        <div
            onClick={() =>
                router.push({
                    pathname: '/ticket',
                    search: '?TicketId=' + data.id,
                })
            }
            className={`max-w-sm rounded-2xl overflow-hidden dark:bg-darkLighter shadow-md cursor-pointer 
            ${data.state === 'done' && 'shadow-primary'}
            ${data.state === 'waiting' && 'shadow-warning'}
            ${data.state === 'ongoing' && 'shadow-secondary'}`}
        >
            <div className="w-full" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                    {data.ticket_type.name}
                </div>
                <p>{data.description}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    {createdAt.calendar()}
                </span>
                <span
                    className={`inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2
                    ${data.state === 'done' && 'bg-primary'}
                    ${data.state === 'waiting' && 'bg-warning'}
                    ${data.state === 'ongoing' && 'bg-secondary'}`}
                >
                    {data.state}
                </span>
            </div>
        </div>
    )
}

export default UserTicketCard
