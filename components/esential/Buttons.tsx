import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'
import React from 'react'
import { CgProfile } from 'react-icons/cg'
import { FaHandsHelping } from 'react-icons/fa'
type ToolTipButtonProps = {
    text: string
    href: string
    icon?: string
}
export const ToolTipButton: React.FC<ToolTipButtonProps> = (props) => {
    return (
        <button className="flex w-full h-1/3">
            <Link href={props.href}>
                <a className="flex rounded-xl w-full h-full justify-start gap-3 items-center border-2 border-opacity-0 focus:border-opacity-100 focus:border-dark hover:bg-gray-100 hover:bg-opacity-10 text-xl">
                    {props.icon == 'profile' ? (
                        <CgProfile />
                    ) : (
                        <FaHandsHelping />
                    )}

                    {props.text}
                </a>
            </Link>
        </button>
    )
}

type ToolTipActionButtonProps = {
    text: string
    onClick: () => void
}
export const ToolTipActionButton: React.FC<ToolTipActionButtonProps> = ({
    text,
    onClick,
}) => {
    return (
        <button onClick={() => onClick()} className="flex w-full h-1/3">
            <a className="flex rounded-xl w-full h-full justify-start gap-3 items-center border-2 border-opacity-0 focus:border-opacity-100 focus:border-dark hover:bg-gray-100 hover:bg-opacity-10 text-xl">
                {text}
            </a>
        </button>
    )
}

type SubmitButtonProps = {
    text: string
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({ text }) => {
    const { t } = useTranslation('common')

    return (
        <button
            className="bg-primary hover:shadow-sm hover:translate-x-1 shadow-md text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
        >
            {t(text)}
        </button>
    )
}
