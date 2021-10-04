import { Container } from "@nextui-org/react";
import React from "react";
import SignUp from "./signUp";
import { Text, Row } from "@nextui-org/react";
const Login = () => {
    return (
        <Container fluid wrap="wrap" justify="center">
            <Row justify="center">
                <Text color="success" h1>
                    SignIn Page
                </Text>
            </Row>

            <SignUp />
        </Container>
    );
};

export default Login;
