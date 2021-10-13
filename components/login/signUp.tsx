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
import { SingUpValues } from "../../types/formtypes";
import { supabase } from "../../lib/supabaseClient";
import { useState } from "react";
import { useRouter } from "next/router";
import useCreateUser from "../../hooks/login/useCreateUser";

const SignUp = () => {
    const { register, handleSubmit } = useForm<SingUpValues>();
    const onSubmit: SubmitHandler<SingUpValues> = (data) => {
        setEmail(data.email);
        setPassword(data.password);
        setName(data.name);
        setSurname(data.surname);
        createUserMutation.mutate();
    };

    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");

    const createUserMutation = useCreateUser({
        email,
        password,
        name,
        surname,
    });
    if (createUserMutation.isSuccess) {
        router.push("/");
    }
    return (
        <Container gap={2} justify="center" wrap="wrap" fluid>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Row wrap="wrap" justify="center">
                    <Input
                        size="xlarge"
                        rounded
                        bordered
                        color="primary"
                        label="Name"
                        placeholder="John"
                        {...register("name")}
                    ></Input>

                    <Input
                        size="xlarge"
                        rounded
                        bordered
                        color="primary"
                        label="surname"
                        placeholder="Smith"
                        {...register("surname")}
                    ></Input>
                </Row>
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
                <Row justify="center">
                    <Input.Password
                        clearable
                        size="xlarge"
                        rounded
                        bordered
                        color="primary"
                        label="Confirm password"
                        type="password"
                        placeholder="Confirm password"
                        {...register("confirmpassword")}
                    ></Input.Password>
                </Row>
                <Spacer />
                {createUserMutation.isError && (
                    <Text color="error">{createUserMutation.data}</Text>
                )}
                {createUserMutation.isLoading ? (
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

export default SignUp;
