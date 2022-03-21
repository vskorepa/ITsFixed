import { Avatar, Tooltip, Switch } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import { BiSun, BiMoon } from 'react-icons/bi'
import { useTheme } from 'next-themes'
import { SiteLogo } from './logo'
import {
    ToolTipDropDown,
    ToolTipMobileDropDown,
} from '../esential/ToolTipDropDown'
import { MdOutlineMenu } from 'react-icons/md'

type navProps = {
    authRole: string
}

const TopNav: React.FC<navProps> = ({ authRole }) => {
    const { t } = useTranslation('common')
    const { theme, setTheme } = useTheme()
    return (
        <div className="flex border-b-2 border-dark dark:bg-secondary w-full justify-between items-center sm:px-6 px-2 py-1  h-7.5vh shadow-sm">
            <Link href="/">
                <a className="flex title-font font-medium items-center">
                    <SiteLogo height={35} />
                </a>
            </Link>
            <div className="flex items-center gap-2">
                <nav className="sm:flex md:ml-auto font-semibold text-xl hidden flex-wrap items-center text-primary justify-center">
                    {authRole === 'authenticated-user' && (
                        <Link href="/tickets">
                            <a className="mr-5 hover:text-black dark:hover:text-white ">
                                {t('tickets')}
                            </a>
                        </Link>
                    )}
                    {authRole === 'authenticated-operator' && (
                        <Link href="/tickets">
                            <a className="mr-5 hover:text-black dark:hover:text-white ">
                                {t('tickets')}
                            </a>
                        </Link>
                    )}
                    {authRole === 'not-authenticated' && (
                        <Link href="/auth/login">
                            <a className="mr-5 hover:text-black dark:hover:text-white ">
                                {t('SignIn')}
                            </a>
                        </Link>
                    )}
                </nav>
                <div className="sm:hidden flex  h-full items-center">
                    <Tooltip
                        trigger="click"
                        initialVisible={false}
                        placement="bottomEnd"
                        content={<ToolTipMobileDropDown />}
                    >
                        <MdOutlineMenu size={50} />
                    </Tooltip>
                </div>
                <div className="flex justify-end h-full items-center">
                    <div className="flex gap-2 items-center">
                        <div className="sm:flex hidden">
                            {authRole !== 'not-authenticated' && (
                                <Tooltip
                                    trigger="click"
                                    color="#4F98CA"
                                    placement="bottom"
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
                            )}
                        </div>

                        <Switch
                            className="text-white dark:text-dark"
                            //@ts-ignore
                            color="black"
                            checked={theme === 'dark' ? false : true}
                            size="xlarge"
                            iconOff={<BiSun />}
                            iconOn={<BiMoon />}
                            onChange={() =>
                                setTheme(theme === 'dark' ? 'light' : 'dark')
                            }
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopNav
