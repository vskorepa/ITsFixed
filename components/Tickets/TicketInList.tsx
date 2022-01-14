import { Text } from '@nextui-org/react'
import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import { TicketBasicInfo } from '../../types/supabaseTypes'
import moment from 'moment-timezone'
import { useRouter } from 'next/router'
import { data } from 'autoprefixer'
type TicketInListProps = {
    ticketData: TicketBasicInfo
    ChangeTicketId: (ticket_id: string) => void
}

const TicketInList: React.FC<TicketInListProps> = ({
    ticketData,
    ChangeTicketId,
}) => {
    const router = useRouter()
    const { t } = useTranslation('common')
    const createdAt = moment(ticketData.created_at).tz('Europe/Prague', true)
    return (
        <div
            onClick={() => {
                router.push({
                    pathname: '/tickets',
                    query: 'ticket_id=' + ticketData.id,
                })
                ChangeTicketId(ticketData.id)
            }}
            className="border-b cursor-pointer odd:bg-light even:bg-lightDarker hover:bg-white dark:odd:bg-darkDarker dark:even:bg-dark visited:bg-primary active:bg-secondary 
              border-gray-700 border-opacity-75 p-6 dark:hover:bg-darkLighter "
        >
            <div className="w-full h-auto inline-flex items-center justify-between rounded-full mb-4">
                <div
                    className={`
                    flex gap-2
                     ${ticketData.state == 'waiting' && 'text-brown'}
                     ${ticketData.state == 'ongoing' && 'text-secondary'}
                     ${ticketData.state == 'done' && 'text-primary'}
                     `}
                >
                    {t(ticketData.state ?? 'waiting')}
                </div>

                <div className="flex-nowrap">
                    <Text>
                        <strong>{t('user')}</strong> {ticketData.users.email}
                    </Text>
                </div>
            </div>

            <h2 className="text-lg font-medium title-font mb-2">
                {ticketData.ticket_type.name}
            </h2>
            <div className="flex justify-between">
                <p className="leading-relaxed text-base">
                    {ticketData.description?.substr(0, 100)}
                    {(ticketData.description?.length ?? 0 > 100) && '...'}
                </p>
                <p>{createdAt.fromNow()}</p>
            </div>
        </div>
        // </div>
    )
}
export default TicketInList
