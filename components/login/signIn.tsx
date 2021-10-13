import {
    Container,
    Row,
    Input,
    Loading,
    Button,
    Spacer,
    Text,
} from "@nextui-org/react";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { SignInValues } from "../../types/formtypes";
import { supabase } from "../../lib/supabaseClient";
import { useState } from "react";
import { useRouter } from "next/router";
import useLogin from "../../hooks/login/useLoginUser";

const SignIp = () => {
    const { register, handleSubmit } = useForm<SignInValues>();
    const onSubmit: SubmitHandler<SignInValues> = (data) => {
        setEmail(data.email);
        setPassword(data.password);
        loginMutation.mutate();
    };

    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginMutation = useLogin({ email, password });
    if (loginMutation.isSuccess) {
        router.push("/");
    }
    return (
        <Container gap={2} justify="center" wrap="wrap" fluid>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Row justify="center">
                    <Input
                        clearable
                        size="xlarge"
                        rounded
                        bordered
                        color="primary"
                        label="Email"
                        placeholder="example@email.com"
                        {...register("email")}
                    ></Input>
                </Row>
                <Row justify="center">
                    <Input.Password
                        clearable
                        size="xlarge"
                        rounded
                        bordered
                        color="primary"
                        label="Password"
                        type="password"
                        placeholder="password"
                        {...register("password")}
                    ></Input.Password>
                </Row>
                <Spacer />
                {loginMutation.isError && (
                    <Text color="error">{loginMutation.data}</Text>
                )}
                {loginMutation.isLoading ? (
                    <Row justify="center">
                        <Loading size={80} />
                    </Row>
                ) : (
                    <Row justify="center">
                        <Button size="large" color="primary" type="submit">
                            Odeslat
                        </Button>
                    </Row>
                )}
            </form>
        </Container>
    );
};

export default SignIp;
