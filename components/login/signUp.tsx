import {
    Container,
    Row,
    Input,
    Loading,
    Button,
    Spacer,
    Text,
    Col,
} from "@nextui-org/react";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { SingUpValues } from "../../types/formtypes";
import { supabase } from "../../lib/supabaseClient";
import { useState } from "react";
import { useRouter } from "next/router";
import useCreateUser from "../../hooks/login/useCreateUser";
import useTranslation from "next-translate/useTranslation";

const SignUp = () => {
    const { t } = useTranslation("common");

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm<SingUpValues>();

    const onSubmit: SubmitHandler<SingUpValues> = (data) => {
        if (data.password !== data.confirmpassword) {
            setError("confirmpassword", {
                type: "manual",
                message: t("NotMatchingPasswords"),
            });
        }
        // setEmail(data.email);
        // setPassword(data.password);
        // setName(data.name);
        // setSurname(data.surname);
        // createUserMutation.mutate();
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
        <div className=" pt-10 justify-center">
            <form onSubmit={handleSubmit(onSubmit)}>
                <Row className="py-2.5" justify="center">
                    <div className="px-1">
                        <Input
                            size="xlarge"
                            helperColor="error"
                            status={errors.name ? "warning" : "primary"}
                            color={errors.name ? "warning" : "primary"}
                            helperText={errors.name && `${errors.name.message}`}
                            shadow={false}
                            label="Name"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: t("required"),
                                },
                                maxLength: {
                                    value: 30,
                                    message: `${t("maxLength")} 30`,
                                },
                            })}
                        />
                    </div>
                    <div className="px-1">
                        <Input
                            size="xlarge"
                            helperColor="error"
                            status={errors.surname ? "warning" : "primary"}
                            color={errors.surname ? "warning" : "primary"}
                            helperText={
                                errors.surname && `${errors.surname.message}`
                            }
                            shadow={false}
                            label="surname"
                            placeholder="Smith"
                            {...register("surname", {
                                required: {
                                    value: true,
                                    message: t("required"),
                                },
                                maxLength: {
                                    value: 30,
                                    message: `${t("maxLength")} 30`,
                                },
                            })}
                        />
                    </div>
                </Row>
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
                                    "(?=^.{8,}$)((?=.*d)|(?=.*W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                                ),
                                message: `${t("strongerPassword")} 30`,
                            },
                        })}
                    />
                </Row>
                {errors.password?.type == "pattern" && (
                    <Row justify="center">
                        <Text
                            className="rounded-full p-1 m-1 bg-opacity-40 bg-warning"
                            small
                            color="error"
                        >
                            {errors.password.message}
                        </Text>
                    </Row>
                )}
                <Row className="py-2.5" justify="center">
                    <Input.Password
                        size="xlarge"
                        helperColor="error"
                        status={errors.confirmpassword ? "warning" : "primary"}
                        color={errors.confirmpassword ? "warning" : "primary"}
                        helperText={
                            errors.confirmpassword &&
                            `${errors.confirmpassword.message}`
                        }
                        shadow={false}
                        label="Confirm password"
                        type="password"
                        placeholder="Confirm password"
                        {...register("confirmpassword", {
                            required: {
                                value: true,
                                message: t("required"),
                            },
                            maxLength: {
                                value: 30,
                                message: `${t("maxLength")} 30`,
                            },
                        })}
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
        </div>
    );
};

export default SignUp;
