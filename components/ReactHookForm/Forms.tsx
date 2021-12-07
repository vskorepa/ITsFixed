import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import {
    PasswordInput,
    EmailInput,
    FirstNameInput,
    LastNameInput,
    ConfirmPasswordInput,
    RegexPasswordInput,
} from "./FromInputs";
import { SignInValues, SignUpValues } from "../../types/formtypes";
import { SubmitButton } from "../esential/Buttons";
import useTranslation from "next-translate/useTranslation";
type SignInFormProps = {
    OnFormSubmit: (data: SignInValues) => void;
};
export const SignInForm: React.FC<SignInFormProps> = ({ OnFormSubmit }) => {
    const { t } = useTranslation("common");

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();
    const onSubmit = (data: SignInValues) => {
        OnFormSubmit(data);
    };
    return (
        <form
            className="bg-secondary shadow-md rounded px-8 pt-6 pb-8 mb-4 min-w-30vw self-center"
            onSubmit={handleSubmit(onSubmit)}
        >
            <EmailInput register={register} errors={errors} />
            <PasswordInput register={register} errors={errors} />
            <div className="flex items-center justify-between">
                <SubmitButton text="SignIn" />
                <a
                    className="inline-block align-baseline font-bold text-sm text-primary hover:text-blue-800"
                    href="#"
                >
                    Forgot Password?
                </a>
            </div>
        </form>
    );
};

type SignUpFormProps = {
    OnFormSubmit: (data: SignUpValues) => void;
};

export const SignUpForm: React.FC<SignUpFormProps> = ({ OnFormSubmit }) => {
    const { t } = useTranslation("common");

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm<SignUpValues>();

    const onSubmit: SubmitHandler<SignUpValues> = (data) => {
        if (data.password !== data.confirm_password) {
            setError("confirm_password", {
                type: "manual",
                message: t("NotMatchingPasswords"),
            });
        } else {
            console.log("ahoj");
            OnFormSubmit(data);
        }
    };
    return (
        <form
            className="bg-secondary shadow-md rounded px-8 pt-6 pb-8 mb-4 min-w-30vw self-center"
            onSubmit={handleSubmit(onSubmit)}
        >
            <div className="gap-4 flex w-full flex-wrap md:flex-nowrap">
                <FirstNameInput register={register} errors={errors} />
                <LastNameInput register={register} errors={errors} />
            </div>

            <EmailInput register={register} errors={errors} />
            <RegexPasswordInput register={register} errors={errors} />
            <ConfirmPasswordInput register={register} errors={errors} />
            {errors.confirm_password?.type == "manual" && (
                <p className="text-red-500 flex bg-red-200 rounded-full justify-center w-full mb-2">
                    {errors.confirm_password.message}
                </p>
            )}
            <div className="flex items-center justify-between">
                <SubmitButton text="SignUp" />
                <a
                    className="inline-block align-baseline font-bold text-sm text-primary hover:text-blue-800"
                    href="#"
                >
                    Forgot Password?
                </a>
            </div>
        </form>
    );
};
