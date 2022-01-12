import React, { useState } from 'react'
import { GrFilter } from 'react-icons/gr'
import { Button, Tooltip } from '@nextui-org/react'

import CreateTicket from '../Tickets/CreateTicket/CreateTicket'
import { ToolTipDropDownStateFilter } from '../esential/ToolTipDropDown'
import { SearchFrom } from '../ReactHookForm/searhForm'
type TicketsNavProps = {
    stateChange: (state: string) => void
    searchChange: (search: string) => void
}

const TicketsNav: React.FC<TicketsNavProps> = ({
    stateChange,
    searchChange,
}) => {
    const [toolTipVisible, setToolTipVisible] = useState(false)
    const [visible, setVisible] = useState(false)
    const openModal = () => {
        setVisible(true)
    }
    const closeModal = () => {
        setVisible(false)
    }

    return (
        <div className="flex w-screen justify-between h-5vh">
            <div className="flex items-center  bg-secondary w-1/3 justify-between px-3 text-xl">
                <SearchFrom
                    searchChange={(search) => {
                        searchChange(search)
                    }}
                />
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
