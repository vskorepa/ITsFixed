import React, { useState } from 'react'
import { Modal } from '@nextui-org/react'
import { SubmitHandler } from 'react-hook-form'
import useCreateTicket from '../../../hooks/tickets/useCreateTicket'
import { CreateTicketModalForm } from '../../ReactHookForm/Forms'
import { CreateTicketValues } from '../../../types/formtypes'
import useTicketType from '../../../hooks/tickets/useTicketType'
import useTranslation from 'next-translate/useTranslation'

type createTicketProps = {
    visible: boolean
    close: () => void
}

const CreateTicket: React.FC<createTicketProps> = ({ close, visible }) => {
    const { t } = useTranslation('common')

    const [description, setdescription] = useState('')
    const [ticketType, setTicketType] = useState(0)
    const { data } = useTicketType()
    const onSubmit: SubmitHandler<CreateTicketValues> = (data) => {
        setTicketType(data.ticket_type_id ?? 0)
        setdescription(data.description ?? '')
        TicketMutation.mutate()
    }
    const TicketMutation = useCreateTicket({
        description: description,
        ticket_type_id: ticketType,
    })

    return (
        <Modal
            closeButton
            preventClose
            aria-labelledby="modal-title"
            open={visible}
            onClose={close}
        >
            {TicketMutation.error instanceof Error && (
                <p className="text-red-500">{t('OnlyOneTicket')}</p>
            )}
            <CreateTicketModalForm
                options={data ?? []}
                OnFormSubmit={(data) => onSubmit(data)}
            />
        </Modal>
    )
}

export default CreateTicket
