import { Container } from "@nextui-org/react";
import React from "react";
import SignUp from "./signUp";
import SignIn from "./signIn";
import { Text, Row } from "@nextui-org/react";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

type LoginPropTypes = {
    auth: boolean;
};

const Login: React.FC<LoginPropTypes> = ({ auth }) => {
    const { t } = useTranslation("common");

    return (
        <Container fluid wrap="wrap" justify="center">
            <Row justify="center">
                <Text color="success" h1>
                    {auth ? (
                        <Text>{t("SignIn")}</Text>
                    ) : (
                        <Text>{t("SignUp")}</Text>
                    )}
                </Text>
            </Row>
            {auth ? <SignIn /> : <SignUp />}
        </Container>
    );
};

export default Login;
