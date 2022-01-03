import { Avatar, Tooltip, Switch } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import { BiSun, BiMoon } from 'react-icons/bi'
import { useTheme } from 'next-themes'
import { ReactLogo } from './logo'
import { ToolTipDropDown } from '../esential/ToolTipDropDown'
import { MdOutlineMenu } from 'react-icons/md'
const TopNav: React.FC = () => {
    const { t } = useTranslation('common')
    const { theme, setTheme } = useTheme()
    return (
        <div className="flex border-b-2 border-dark dark:bg-secondary w-full justify-between items-center sm:px-6 px-2 py-1  h-7.5vh shadow-sm">
            <Link href="/">
                <a className="flex title-font font-medium items-center">
                    <ReactLogo />
                </a>
            </Link>
            <nav className="md:ml-auto font-semibold text-xl flex flex-wrap items-center text-primary justify-center">
                <Link href="/about">
                    <a className="mr-5 hover:text-black dark:hover:text-white ">
                        {t('aboutus')}
                    </a>
                </Link>
                <Link href="/tickets">
                    <a className="mr-5 hover:text-black dark:hover:text-white ">
                        {t('tickets')}
                    </a>
                </Link>
            </nav>
            <div className="sm:hidden flex h-full items-center">
                <Tooltip
                    trigger="click"
                    initialVisible={false}
                    placement="bottomEnd"
                    content={<ToolTipDropDown />}
                >
                    <MdOutlineMenu size={50} />
                </Tooltip>
            </div>
            <div className="sm:flex hidden h-full items-center">
                <div className="flex gap-2 items-center">
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
    )
}

export default TopNav
