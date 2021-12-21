import {
    Button,
    Col,
    Container,
    Row,
    Spacer,
    Text,
    Link as NextUiLink,
} from "@nextui-org/react";
import React, { useState } from "react";
import Foot from "../../components/Foot";
import TopNav from "../../components/Nav/topNav";
import ProtectedLoginWrapper from "../../components/protected/protectedLogin";
import SignIn from "../../components/login/signIn";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";

const loginPage = () => {
    const { t } = useTranslation("common");
    const router = useRouter();
    return (
        <div>
            <TopNav />
            <div className="w-full h-85vh">
                <div className="w-full flex-wrap flex justify-center gap-2">
                    <div className="text-primary font-semibold w-full pb-4 flex justify-center text-5xl">
                        <h1>{t("SignIn")}</h1>
                    </div>
                    <SignIn />
                    <Row justify="flex-end">
                        <Button
                            light
                            color="primary"
                            onClick={() => router.push("/auth/register")}
                        >
                            {t("noAccount")}
                        </Button>
                    </Row>
                </div>
            </div>
        </div>
    );
};
export default loginPage;
