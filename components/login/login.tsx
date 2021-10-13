import { Button, Container } from "@nextui-org/react";
import React, { useState } from "react";
import SignUp from "./signUp";
import SignIn from "./signIn";
import { Text, Row } from "@nextui-org/react";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

const Login: React.FC = () => {
    const { t } = useTranslation("common");
    const [auth, setAuth] = useState(true);

    return (
        <div className="w-full flex-wrap ">
            <Row className="text-sandy" justify="center">
                {auth ? (
                    <Text className="text-4xl font-bold" h1>
                        {t("SignIn")}
                    </Text>
                ) : (
                    <Text className="text-4xl" h1>
                        {t("SignUp")}
                    </Text>
                )}
            </Row>
            {auth ? <SignIn /> : <SignUp />}
            <Row justify="flex-end">
                {auth ? (
                    <Button
                        light
                        color="primary"
                        onClick={() => setAuth(!auth)}
                    >
                        {t("noAccount")}
                    </Button>
                ) : (
                    <Button
                        light
                        color="primary"
                        onClick={() => setAuth(!auth)}
                    >
                        {t("alreadyAccount")}
                    </Button>
                )}
            </Row>
        </div>
    );
};

export default Login;
