import Link from "next/link";
import React from "react";
import { CgProfile } from "react-icons/cg";
import { IoLogOutOutline } from "react-icons/io5";
type ToolTipButtonProps = {
    text: string;
    href: string;
    icon?: string;
};
export const ToolTipButton: React.FC<ToolTipButtonProps> = (props) => {
    return (
        <button className="flex w-full h-1/3">
            <Link href={props.href}>
                <a className="flex rounded-xl w-full h-full justify-start gap-3 items-center border-2 border-opacity-0 focus:border-opacity-100 focus:border-dark hover:bg-gray-100 hover:bg-opacity-10 text-xl">
                    <CgProfile />
                    {props.text}
                </a>
            </Link>
        </button>
    );
};
