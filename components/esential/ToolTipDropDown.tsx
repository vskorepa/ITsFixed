import router from 'next/router'
import React from 'react'
import { IoLogOutOutline } from 'react-icons/io5'
import useLogoutUser from '../../hooks/login/useLogoutUser'
import { ToolTipActionButton, ToolTipButton } from './Buttons'
import useTranslation from 'next-translate/useTranslation'
import { GrTicket } from 'react-icons/gr'
import { FaHandsHelping } from 'react-icons/fa'
import { CgProfile } from 'react-icons/cg'
import { Avatar, Tooltip } from '@nextui-org/react'
export const ToolTipDropDown: React.FC = () => {
    const { t } = useTranslation('common')
    const LogoutMutation = useLogoutUser()
    const handleLogOut = () => {
        LogoutMutation.mutate()
    }
    return (
        <div color="error" className="flex flex-wrap w-48">
            <ToolTipButton text={t('profile')} href="/profile">
                <CgProfile />
            </ToolTipButton>
            <ToolTipButton text={t('wantToHelp')} href="/operator">
                <FaHandsHelping />
            </ToolTipButton>

            <button
                className="flex rounded-xl w-full h-full justify-start gap-3 items-center border-2 border-opacity-0 focus:border-opacity-100 focus:border-dark hover:bg-gray-100 hover:bg-opacity-10 text-xl"
                onClick={() => handleLogOut()}
            >
                <IoLogOutOutline />
                {t('logout')}
            </button>
        </div>
    )
}

export const ToolTipMobileDropDown: React.FC = () => {
    const { t } = useTranslation('common')
    const LogoutMutation = useLogoutUser()
    if (LogoutMutation.isSuccess) {
        router.push('/auth/login')
    }
    return (
        <div color="error" className="flex flex-wrap w-48">
            <ToolTipButton text={t('tickets')} href="/tickets">
                <GrTicket />
            </ToolTipButton>
            <Tooltip
                trigger="click"
                color="#4F98CA"
                placement="bottomStart"
                content={<ToolTipDropDown />}
            >
                <Avatar
                    src="/avatar1.png"
                    pointer
                    bordered
                    color="success"
                    size="medium"
                />
            </Tooltip>
        </div>
    )
}

type ToolTipDropDownStateFilterProps = {
    onClick: (state: string) => void
}

export const ToolTipDropDownStateFilter: React.FC<
    ToolTipDropDownStateFilterProps
> = ({ onClick }) => {
    const { t } = useTranslation('common')
    const LogoutMutation = useLogoutUser()
    if (LogoutMutation.isSuccess) {
        router.push('/auth/login')
    }
    return (
        <div color="error" className="flex flex-wrap w-48">
            <ToolTipActionButton
                text={t('waiting')}
                onClick={() => onClick('waiting')}
            />
            <ToolTipActionButton
                text={t('done')}
                onClick={() => onClick('done')}
            />
            <ToolTipActionButton
                text={t('ongoing')}
                onClick={() => onClick('ongoing')}
            />
        </div>
    )
}
