import {
    Button,
    Col,
    Container,
    Grid,
    Link as NextUiLink,
    Loading,
    Row,
    Avatar,
    Text,
    Tooltip,
    Switch,
} from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { BsTools } from "react-icons/bs";
import useUser from "../../hooks/useUser";
import { supabase } from "../../lib/supabaseClient";
import SignOut from "../login/signOut";
import useTranslation from "next-translate/useTranslation";
import { HiX, HiOutlineMenu, HiOutlineBell } from "react-icons/hi";
import Image from "next/image";
import { BiSun, BiMoon } from "react-icons/bi";
import { useTheme } from "next-themes";
import { ReactLogo } from "./logo";
export const ToolTipDropDown: React.ReactNode = () => {
    return (
        <div className="flex w-16 h-20">
            <Text>Ahoj</Text>
            <Text>Je to tak</Text>
        </div>
    );
};

const TopNav: React.FC = () => {
    const { t } = useTranslation("common");
    const router = useRouter();
    const { data, isLoading } = useUser();

    const [open, setOpen] = useState(false);
    const { theme, setTheme } = useTheme();
    const [nav, showNav] = useState(true);
    return (
        <div className="mx-auto w-full flex flex-wrap px-6 py-1 h-7.5vh flex-col md:flex-row items-center shadow-sm">
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
                <Tooltip trigger="hover" color="success" position="bottom">
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
                    color="foreground"
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
