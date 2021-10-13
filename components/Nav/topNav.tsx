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
import useUser from "../../hooks/useUser";
import SignOut from "../login/signOut";

const TopNav: React.FC = () => {
    const router = useRouter();
    const { data, isLoading } = useUser();
    console.log(data);

    return (
        <div className="flex w-full items-center justify-between py-3 text-flame font-bold shadow mb-2">
            <div className="text-xl flex items-center space-x-4">
                <Link href="/">
                    <div className=" plr-1 px-2 text-2xl cursor-pointer">
                        Home
                    </div>
                </Link>
            </div>

            <div className="text-xl px-2 flex items-center space-x-4">
                {isLoading ? (
                    <Loading size="medium" className="bg-flame" />
                ) : (
                    <div className="text-xl px-2 flex items-center space-x-4">
                        <div>
                            <Link href="/profile?">{data.email}</Link>
                        </div>
                    </div>
                )}
                <div className="text-xl px-2 flex items-center space-x-4">
                    <SignOut />
                </div>
            </div>
        </div>
    );
};

export default TopNav;
