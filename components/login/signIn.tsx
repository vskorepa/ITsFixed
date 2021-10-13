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
import useTranslation from "next-translate/useTranslation";
const SignIp = () => {
    const { t } = useTranslation("common");
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignInValues>();
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
        <div className="justify-center flex-wrap">
            <form onSubmit={handleSubmit(onSubmit)}>
                <Row className="py-2.5" justify="center">
                    <Input
                        size="xlarge"
                        helperColor="error"
                        status={errors.email ? "warning" : "primary"}
                        color={errors.email ? "warning" : "primary"}
                        helperText={errors.email && `${errors.email.message}`}
                        shadow={false}
                        label="Email"
                        placeholder="example@email.com"
                        {...register("email", {
                            required: {
                                value: true,
                                message: t("required"),
                            },
                            pattern: {
                                value: RegExp(
                                    "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
                                ),

                                message: t("validemail"),
                            },
                        })}
                    ></Input>
                </Row>
                <Row className="py-2.5" justify="center">
                    <Input.Password
                        size="xlarge"
                        helperColor="error"
                        status={errors.password ? "warning" : "primary"}
                        color={errors.password ? "warning" : "primary"}
                        helperText={
                            errors.password?.type == "required"
                                ? `${errors.password.message}`
                                : ""
                        }
                        shadow={false}
                        label="Password"
                        type="password"
                        placeholder="password"
                        {...register("password", {
                            required: {
                                value: true,
                                message: t("required"),
                            },
                            maxLength: {
                                value: 30,
                                message: `${t("maxLength")} 30`,
                            },
                            pattern: {
                                value: RegExp(
                                    "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$"
                                ),
                                message: `${t("strongerPassword")}`,
                            },
                        })}
                    />
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
        </div>
    );
};

export default SignIp;
