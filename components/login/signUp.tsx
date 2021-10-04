import { Container, Row, Input } from "@nextui-org/react";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { SingUpValues } from "../../types/formtypes";
import { supabase } from "../../lib/supabaseClient";
import { useState } from "react";

const SignUp = () => {
    const { register, handleSubmit } = useForm<SingUpValues>();
    const onSubmint: SubmitHandler<SingUpValues> = (data) =>
        handleSignIn(data.email, data.password);
    const [loading, setLoading] = useState(false);
    const handleSignIn = async (email: string, password: string) => {
        try {
            setLoading(true);
            const { error } = await supabase.auth.signUp({
                email: "example@email.com",
                password: "example-password",
            });
        } catch (error) {
            // @ts-ignore
            alert(error.error_description || error.message);
        } finally {
            setLoading(false);
        }
    };

    // const { user, session, error } = await supabase.auth.signUp({
    //     email: "example@email.com",
    //     password: "example-password",
    // });

    return (
        <Container justify="center" wrap="wrap" fluid>
            <form onSubmit={handleSubmit(onSubmint)}>
                <Row justify="center">
                    <Input
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
                    <Input
                        size="xlarge"
                        rounded
                        bordered
                        color="primary"
                        label="Password"
                        type="password"
                        placeholder="password"
                        {...register("password")}
                    ></Input>
                </Row>
                <Row justify="center">
                    <Input
                        size="xlarge"
                        rounded
                        bordered
                        color="primary"
                        label="Confirm password"
                        type="password"
                        placeholder="Confirm password"
                        {...register("confirmpassword")}
                    ></Input>
                </Row>
            </form>
        </Container>
    );
};

export default SignUp;
