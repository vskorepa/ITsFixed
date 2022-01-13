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
            closeButton
            preventClose
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
            {/* <Modal.Header>
                <h2 id="modal-title">Chose what filters you want</h2>
            </Modal.Header>
            <Modal.Body>
                <div className="flex flex-col justify-around">
                    <label id="Problem_type">Problem type filter</label>
                    <select
                        defaultValue={ticketType}
                        id="Problem_type"
                        className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                    >
                        {data?.map(
                            (option) => (
                                // option.id === ticketType ? (
                                <option
                                    key={option.id}
                                    value={option.id}
                                    onClick={() => ticketTypeChage(option.id)}
                                >
                                    {option.name}
                                </option>
                            )
                            // ) : (
                            //     <option
                            //         key={option.id}
                            //         value={option.id}
                            //         onClick={() => ticketTypeChage(option.id)}
                            //     >
                            //         {option.name}
                            //     </option>
                            // )
                        )}
                    </select>
                    <label id="Ticket state filter">Ticket state filter</label>

                    <select
                        onChange={(change) => {
                            console.log(change)
                        }}
                        id="Ticket state filter"
                        defaultValue={ticketState}
                        className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                    >
                        {states?.map(
                            (itemTicketState) => (
                                // itemTicketState === ticketState ? (
                                <option
                                    onSelect={() => {
                                        console.log('select')
                                    }}
                                    key={itemTicketState}
                                    value={itemTicketState}
                                    onClick={() => {
                                        ticketStateChange(ticketState),
                                            console.log('click')
                                    }}
                                >
                                    {itemTicketState}
                                </option>
                            )
                            // ) : (
                            //     <option
                            //         key={itemTicketState}
                            //         value={ticketState}
                            //         onClick={() =>
                            //             ticketStateChange(ticketState)
                            //         }
                            //     >
                            //         {ticketState}
                            //     </option>
                            // )
                        )}
                    </select>
                </div>
            </Modal.Body>
            <Modal.Footer></Modal.Footer> */}
        </Modal>
    )
}
export default TicketsModalFilter
