import React, { useState } from 'react'
import { GrFilter } from 'react-icons/gr'
import { Button, Tooltip } from '@nextui-org/react'

import CreateTicket from '../Tickets/CreateTicket/CreateTicket'
import { ToolTipDropDownStateFilter } from '../esential/ToolTipDropDown'
import { SearchFrom } from '../ReactHookForm/searhForm'
import TicketsModalFilter from './TicketsNavFilter'
import { MdOutlineClear } from 'react-icons/md'
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai'
type TicketsNavProps = {
    filterClear: () => void
    stateChange: (state: string) => void
    typeChange: (state: number) => void
    searchChange: (search: string) => void
    ticketsToggle: () => void
    type: number
    state: string
}

const TicketsNav: React.FC<TicketsNavProps> = ({
    filterClear,
    stateChange,
    searchChange,
    typeChange,
    type,
    state,
    ticketsToggle,
}) => {
    const [ticketsVisible, setTicketsVisible] = useState(true)
    const [visible, setVisible] = useState(false)
    return (
        <div className="flex w-screen justify-between h-5vh">
            <div className="flex items-center  bg-secondary sm:w-1/3 justify-between px-3 text-xl w-full">
                <SearchFrom
                    searchChange={(search) => {
                        searchChange(search)
                    }}
                />

                <span className="relative inline-block">
                    <div className="flex items-center">
                        <button
                            className="flex items-center justify-center p-0 w-12 h-10 rounded-full bg-secondaryDarker hover:bg-secondaryLighter active:shadow-lg mouse shadow transition ease-in duration-200 focus:translate-y-0.5"
                            onClick={() => setVisible(true)}
                        >
                            <GrFilter />
                            <TicketsModalFilter
                                ticketType={type}
                                ticketState={state}
                                ticketStateChange={(state) =>
                                    stateChange(state)
                                }
                                ticketTypeChage={(type) => typeChange(type)}
                                onFilterSubmit={() => setVisible(false)}
                                visible={visible}
                                close={() => setVisible(false)}
                            />
                        </button>
                    </div>
                    <span
                        className="absolute top-0 right-0 font-bold text-sm leading-none transfor rounded-full cursor-pointer hover:bg-secondaryLighter mouse shadow transition ease-in duration-200"
                        onClick={() => filterClear()}
                    >
                        <MdOutlineClear />
                    </span>
                </span>
            </div>
            <div className="bg-secondary justify-end flex items-center px-3">
                <button
                    onClick={() => {
                        ticketsToggle(), setTicketsVisible(!ticketsVisible)
                    }}
                    className="flex items-center justify-center p-0 w-12 h-10 rounded-full bg-secondaryDarker hover:bg-secondaryLighter active:shadow-lg mouse shadow transition ease-in duration-200 focus:translate-y-0.5"
                >
                    {ticketsVisible ? <AiOutlineUp /> : <AiOutlineDown />}
                </button>
            </div>
        </div>
    )
}

export default TicketsNav
