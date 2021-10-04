import {
    Container,
    Row,
    Input,
    Loading,
    Button,
    Spacer,
} from "@nextui-org/react";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { SingUpValues } from "../../types/formtypes";
import { supabase } from "../../lib/supabaseClient";
import { useState } from "react";

const SignUp = () => {
    const { register, handleSubmit } = useForm<SingUpValues>();
    const onSubmint: SubmitHandler<SingUpValues> = (data) => {
        handleSignIn(data.email, data.password);
        console.log(data);
    };
    const [loading, setLoading] = useState(false);
    const handleSignIn = async (email: string, password: string) => {
        try {
            setLoading(true);
            const { user, session, error } = await supabase.auth.signUp({
                email: email,
                password: password,
            });
            console.log(user);
        } catch (error) {
            // @ts-ignore
            alert(error.error_description || error.message);
        } finally {
            setLoading(false);
        }
    };

    if (loading == true)
        return (
            <Container>
                <Loading size={80} />
            </Container>
        );
    else
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
                    <Spacer />
                    <Row justify="center">
                        <Button size="large" color="primary" type="submit">
                            Odeslat
                        </Button>
                    </Row>
                </form>
            </Container>
        );
};

export default SignUp;
