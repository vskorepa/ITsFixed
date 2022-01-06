import { Loading, Button, Text } from '@nextui-org/react'
import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import useTicketDetail from '../../hooks/tickets/useTicketDetail'
import useUpdateTicket from '../../hooks/tickets/useUpdateTicket'
import Chat from '../messages/chat'
import { supabase } from '../../lib/supabaseClient'

type TicketDetailProps = {
    id: string
}

const TicketDetail: React.FC<TicketDetailProps> = ({ id }) => {
    const { t } = useTranslation('common')

    const TicketFinish = () => {
        TicketMutation.mutate()
    }
    const { data, isLoading } = useTicketDetail(id)
    const TicketMutation = useUpdateTicket({
        id: id,
        state: 'done',
    })
    if (id === null) {
        return <div className="h-80vh w-2/3"></div>
    }
    return (
        <div className="h-80vh w-2/3">
            <div className="h-30vh w-full justify-center">
                <div className="flex flex-nowrap justify-between p-3 items-center">
                    {isLoading ? (
                        <Loading />
                    ) : (
                        <Text color="success">
                            {t('ticketNumber')} {data?.id ?? ''}
                        </Text>
                    )}

                    <div className="flex-wrap flex gap-2 items-center">
                        {isLoading ? (
                            <Loading size="medium" />
                        ) : (
                            <Text weight="bold">
                                {data ? t(`${data?.state}`) : 'Ticket state:'}
                            </Text>
                        )}
                        <Button onClick={() => TicketFinish()} auto>
                            Finish
                        </Button>
                    </div>
                </div>
                <Text>{data?.users.first_name}</Text>
                <Text>{data?.users.last_name}</Text>
                <Text>{data?.users.email}</Text>

                <Text>{data?.description}</Text>
            </div>
            <div className="w-auto h-auto bg-lightDarker border-white rounded-3xl mr-4 border-2 dark:border-darkLighter dark:bg-darkDarker ">
                <Chat id={id} />
            </div>
        </div>
    )
}
export default TicketDetail
