import { Button } from "@nextui-org/react";
import router from "next/router";
import React from "react";
import { IoLogOutOutline } from "react-icons/io5";
import useLogoutUser from "../../hooks/login/useLogoutUser";
import { ToolTipButton } from "./Buttons";
import useTranslation from "next-translate/useTranslation";
export const ToolTipDropDown: React.FC = () => {
    const { t } = useTranslation("common");
    const LogoutMutation = useLogoutUser();
    if (LogoutMutation.isSuccess) {
        router.push("/");
    }
    return (
        <div color="error" className="flex flex-wrap w-48">
            <ToolTipButton text={t("profile")} href="/profile" icon="profile" />
            <ToolTipButton
                text={t("wantToHelp")}
                href="/operator"
                icon="operator"
            />

            <button
                className="flex rounded-xl w-full h-full justify-start gap-3 items-center border-2 border-opacity-0 focus:border-opacity-100 focus:border-dark hover:bg-gray-100 hover:bg-opacity-10 text-xl"
                onClick={() => LogoutMutation.mutate()}
            >
                <IoLogOutOutline />
                {t("logout")}
            </button>
        </div>
    );
};
