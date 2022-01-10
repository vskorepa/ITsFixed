import React, { useState } from 'react'
import { HiSearch } from 'react-icons/hi'
import { GrFilter } from 'react-icons/gr'
import { Button, Input, Tooltip } from '@nextui-org/react'

import CreateTicket from '../Tickets/CreateTicket/CreateTicket'
import {
    ToolTipDropDown,
    ToolTipDropDownStateFilter,
} from '../esential/ToolTipDropDown'
type TicketsNavProps = {
    stateChange: (state: string) => void
}

const TicketsNav: React.FC<TicketsNavProps> = ({ stateChange }) => {
    const [toolTipVisible, setToolTipVisible] = useState(false)
    const [visible, setVisible] = useState(false)
    const openModal = () => {
        setVisible(true)
    }
    const closeModal = () => {
        setVisible(false)
    }
    const logState = (state: string) => {
        stateChange(state)
    }
    return (
        <div className="flex w-screen justify-between h-5vh">
            <div className="flex items-center  bg-secondary w-1/3 justify-between px-3 text-2xl">
                <div className="">
                    <Input
                        size="small"
                        shadow={false}
                        bordered
                        className="pt-1"
                        contentLeft={
                            <HiSearch className="text-dark dark:text-white" />
                        }
                    />
                    {/* <input></input>
                    <input className="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none">
                        <button
                            type="submit"
                            className="absolute right-0 top-0 mt-3 mr-4"
                        >
                            <HiSearch />
                        </button>
                    </input> */}
                </div>
                <Tooltip
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
                >
                    <div className="items-center">
                        <Button
                            size="small"
                            auto
                            flat
                            rounded
                            color="background"
                            icon={<GrFilter />}
                        />
                    </div>
                </Tooltip>
            </div>
            <div className="bg-secondary w-2/3 justify-end flex items-center px-3">
                <Button
                    className=""
                    onClick={() => openModal()}
                    auto
                    rounded
                    size="small"
                    // icon={<HiPlus className="justify-self-center" />}
                >
                    +
                    <CreateTicket visible={visible} close={closeModal} />
                </Button>
            </div>
        </div>
    )
}

export default TicketsNav
