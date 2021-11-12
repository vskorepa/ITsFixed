import router from "next/router";
import React from "react";
import { IoLogOutOutline } from "react-icons/io5";
import useLogoutUser from "../../hooks/login/useLogoutUser";
import { ToolTipButton } from "./Buttons";

export const ToolTipDropDown: React.FC = () => {
    const LogoutMutation = useLogoutUser();
    if (LogoutMutation.isSuccess) {
        router.push("/");
    }
    return (
        <div color="error" className="flex flex-wrap w-40">
            <ToolTipButton text="Profile" href="/profile" icon="profile" />
            <ToolTipButton
                text="Want to help?"
                href="/operator"
                icon="operator"
            />

            <button
                className="flex rounded-xl w-full h-full justify-start gap-3 items-center border-2 border-opacity-0 focus:border-opacity-100 focus:border-dark hover:bg-gray-100 hover:bg-opacity-10 text-xl"
                onClick={() => LogoutMutation.mutate()}
            >
                <IoLogOutOutline />
                LogOut
            </button>
        </div>
    );
};
