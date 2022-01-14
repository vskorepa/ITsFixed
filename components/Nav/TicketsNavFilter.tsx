import React, { useState } from 'react'
import { Modal } from '@nextui-org/react'
import { SubmitHandler } from 'react-hook-form'
import useTicketType from '../../hooks/tickets/useTicketType'
import {
    CreateTicketModalForm,
    FilterTicketsModalForm,
} from '../ReactHookForm/Forms'
import { SelectInput } from '../ReactHookForm/FromInputs'
import { FilterTicketsValues } from '../../types/formtypes'

type filtericketProps = {
    onFilterSubmit: () => void
    visible: boolean
    close: () => void
    ticketStateChange: (ticketState: string) => void
    ticketTypeChage: (ticketType: number) => void
    ticketState: string
    ticketType: number
}

const TicketsModalFilter: React.FC<filtericketProps> = ({
    close,
    visible,
    ticketTypeChage,
    ticketStateChange,
    ticketState,
    ticketType,
    onFilterSubmit,
}) => {
    const onSubmit: SubmitHandler<FilterTicketsValues> = (data) => {
        console.log(data)
        ticketStateChange(data.ticketState)
        ticketTypeChage(data.ticketType)
        onFilterSubmit()
    }
    const { data } = useTicketType()
    const states = [
        { id: 'waiting', name: 'waiting' },
        { id: 'ongoing', name: 'ongoing' },
        { id: 'done', name: 'done' },
    ]
    return (
        <Modal
            preventClose
            animated={false}
            closeButton
            aria-labelledby="modal-title"
            open={visible}
            onClose={close}
        >
            <FilterTicketsModalForm
                state={ticketState}
                type={ticketType}
                stateOptions={states}
                typeOptions={data ?? []}
                OnFormSubmit={(data) => onSubmit(data)}
            />
        </Modal>
    )
}
export default TicketsModalFilter
