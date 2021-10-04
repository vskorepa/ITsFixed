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
import Foot from "../components/Foot";
import Login from "../components/login/login";
import useTranslation from "next-translate/useTranslation";

const loginPage = () => {
    const [auth, setAuth] = useState(true);
    const { t } = useTranslation("common");

    return (
        <Container fluid justify="center">
            <Login auth={auth} />
            <Spacer />
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

            <Foot />
        </Container>
    );
};

export default loginPage;
