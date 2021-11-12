import { Link as NextUiLink, Avatar, Tooltip, Switch } from "@nextui-org/react";
import Link from "next/link";
import router, { useRouter } from "next/router";
import React, { useState } from "react";
import useTranslation from "next-translate/useTranslation";
import { BiSun, BiMoon } from "react-icons/bi";
import { useTheme } from "next-themes";
import { ReactLogo } from "./logo";
import { ToolTipButton } from "../esential/Buttons";
import useLogoutUser from "../../hooks/login/useLogoutUser";
import { IoLogOutOutline } from "react-icons/io5";
import { ToolTipDropDown } from "../esential/ToolTipDropDown";

const TopNav: React.FC = () => {
    const { t } = useTranslation("common");
    const { theme, setTheme } = useTheme();
    return (
        <div className="mx-auto border-b-2 border-dark dark:bg-secondary w-full flex flex-wrap px-6 py-1 h-7.5vh flex-col md:flex-row items-center shadow-sm">
            <Link href="/">
                <a className="flex title-font font-medium items-center mb-4 md:mb-0">
                    <ReactLogo />
                </a>
            </Link>
            <nav className="md:ml-auto font-semibold text-xl flex flex-wrap items-center text-primary justify-center">
                <Link href="/about">
                    <a className="mr-5 hover:text-black dark:hover:text-white ">
                        {t("aboutus")}
                    </a>
                </Link>
                <Link href="/tickets">
                    <a className="mr-5 hover:text-black dark:hover:text-white ">
                        {t("tickets")}
                    </a>
                </Link>
            </nav>

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
                        size={50}
                    />
                </Tooltip>
                <Switch
                    className="text-black"
                    color="black"
                    checked={theme === "dark" ? false : true}
                    size="xlarge"
                    iconOff={<BiSun />}
                    iconOn={<BiMoon />}
                    onChange={() =>
                        setTheme(theme === "dark" ? "light" : "dark")
                    }
                />
            </div>
        </div>
    );
};

export default TopNav;
