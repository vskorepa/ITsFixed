import React, { useState } from 'react'
import { GrFilter } from 'react-icons/gr'
import { Button, Tooltip } from '@nextui-org/react'

import CreateTicket from '../Tickets/CreateTicket/CreateTicket'
import { ToolTipDropDownStateFilter } from '../esential/ToolTipDropDown'
import { SearchFrom } from '../ReactHookForm/searhForm'
import TicketsModalFilter from './TicketsNavFilter'
import { MdOutlineClear } from 'react-icons/md'
type TicketsNavProps = {
    filterClear: () => void
    stateChange: (state: string) => void
    typeChange: (state: number) => void
    searchChange: (search: string) => void
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
}) => {
    const [toolTipVisible, setToolTipVisible] = useState(false)
    const [visible, setVisible] = useState(false)
    return (
        <div className="flex w-screen justify-between h-5vh">
            <div className="flex items-center  bg-secondary w-1/3 justify-between px-3 text-xl">
                <SearchFrom
                    searchChange={(search) => {
                        searchChange(search)
                    }}
                />
                {/* <Tooltip
                    trigger="click"
                    onClick={() => setToolTipVisible(!toolTipVisible)}
                    color="#50D890"
                    placement="right"
                    visible={toolTipVisible}
                    content={
                        <ToolTipDropDownStateFilter
                            onClick={(state) => {
                                stateChange(state), setToolTipVisible(false)
                            }}
                        />
                    }
                > */}
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

                {/* </Tooltip> */}
            </div>
            <div className="bg-secondary w-2/3 justify-end flex items-center px-3">
                {/* <Button
                    className=""
                    onClick={() => setVisible(true)}
                    auto
                    rounded
                    size="small"
                    // icon={<HiPlus className="justify-self-center" />}
                >
                    +
                    <CreateTicket visible={visible} close={()=>setVisible(false)} />
                </Button> */}
            </div>
        </div>
    )
}

export default TicketsNav
