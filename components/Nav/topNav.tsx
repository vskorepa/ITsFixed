import {
    Button,
    Col,
    Container,
    Grid,
    Link as NextUiLink,
    Loading,
    Row,
} from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { BsTools } from "react-icons/bs";
import useUser from "../../hooks/useUser";
import { supabase } from "../../lib/supabaseClient";
import SignOut from "../login/signOut";
import useTranslation from "next-translate/useTranslation";
const TopNav: React.FC = () => {
    const { t } = useTranslation("common");
    const router = useRouter();
    const { data, isLoading } = useUser();
    return (
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                <BsTools />

                <span className="ml-3 text-2xl text-sandy">FixedIT</span>
            </a>
            <nav className="md:ml-auto flex flex-wrap items-center text-base text-sandy justify-center">
                <Link href="/">
                    <a className="mr-5 hover:text-white">{t("home")}</a>
                </Link>
                <Link href="/tickets">
                    <a className="mr-5 hover:text-white">{t("tickets")}</a>
                </Link>
                {isLoading ? (
                    <Loading />
                ) : (
                    <Link href={"user?userId=" + data.id}>
                        <a className="mr-5 hover:text-white text-flame">
                            {data.email}
                        </a>
                    </Link>
                )}
            </nav>
            <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
                <SignOut />
            </button>
        </div>
    );
};

export default TopNav;
