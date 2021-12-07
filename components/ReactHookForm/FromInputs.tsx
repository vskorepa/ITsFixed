import React from "react";
import { UseFormReturn, FieldErrors } from "react-hook-form";
import useTranslation from "next-translate/useTranslation";

type InputProps = {
    register: UseFormReturn["register"];
    errors: FieldErrors;
};

export const FirstNameInput: React.FC<InputProps> = ({ register, errors }) => {
    const { t } = useTranslation("common");

    return (
        <div className="mb-4 w-full">
            <label
                className="block text-gray-700 text-sm font-bold mb-2"
                id="first_name"
            >
                First name
            </label>
            <input
                id="first_name"
                className={` ${
                    errors.first_name ? "border-red-500" : "border-dark"
                }
                focus:border-primary 
                 shadow bg-light appearance-none border-2 rounded w-full py-2 px-3
                 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline
                 `}
                type="text"
                placeholder="John"
                {...register("first_name", {
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
            {errors.first_name && (
                <p className="text-red-500 text-md italic">
                    {errors.first_name.message}
                </p>
            )}
        </div>
    );
};
export const LastNameInput: React.FC<InputProps> = ({ register, errors }) => {
    const { t } = useTranslation("common");

    return (
        <div className="mb-4 w-full">
            <label
                className="block text-gray-700 text-sm font-bold mb-2"
                id="last_name"
            >
                Last name
            </label>
            <input
                id="last_name"
                className={` ${
                    errors.last_name ? "border-red-500" : "border-dark"
                }
                focus:border-primary 
                 shadow bg-light appearance-none border-2 rounded w-full py-2 px-3
                 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline
                 `}
                type="text"
                placeholder="Smith"
                {...register("last_name", {
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
            {errors.last_name && (
                <p className="text-red-500 text-md italic">
                    {errors.last_name.message}
                </p>
            )}
        </div>
    );
};
export const EmailInput: React.FC<InputProps> = ({ register, errors }) => {
    const { t } = useTranslation("common");

    return (
        <div className="mb-4 w-full">
            <label
                className="block text-gray-700 text-sm font-bold mb-2"
                id="email"
            >
                E-Mail
            </label>
            <input
                id="email"
                className={` ${
                    errors.password ? "border-red-500" : "border-dark"
                }
                focus:border-primary 
                 shadow bg-light appearance-none border-2 rounded w-full py-2 px-3
                 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline
                 `}
                type="text"
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
            />
            {errors.email && (
                <p className="text-red-500 text-md italic">
                    {errors.email.message}
                </p>
            )}
        </div>
    );
};
export const PasswordInput: React.FC<InputProps> = ({ register, errors }) => {
    const { t } = useTranslation("common");

    return (
        <div className="mb-4 w-full">
            <label
                className="block text-gray-700 text-sm font-bold mb-2"
                id="password"
            >
                Password
            </label>
            <input
                id="password"
                className={` ${
                    errors.password ? "border-red-500" : "border-dark"
                }
                focus:border-primary 
                 shadow bg-light appearance-none border-2 rounded w-full py-2 px-3
                 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline
                 `}
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
                })}
            />
            {errors.password?.type == "required" ? (
                <p className="text-red-500 text-md italic">
                    {errors.password.message}
                </p>
            ) : (
                <></>
            )}
        </div>
    );
};
export const RegexPasswordInput: React.FC<InputProps> = ({
    register,
    errors,
}) => {
    const { t } = useTranslation("common");

    return (
        <div className="mb-4 w-full">
            <label
                className="block text-gray-700 text-sm font-bold mb-2"
                id="password"
            >
                Password
            </label>
            <input
                id="password"
                className={` ${
                    errors.password ? "border-red-500" : "border-dark"
                }
                focus:border-primary 
                 shadow bg-light appearance-none border-2 rounded w-full py-2 px-3
                 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline
                 `}
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
            {errors.password?.type == "required" && (
                <p className="text-red-500 text-md">
                    {errors.password.message}
                </p>
            )}
            {errors.password?.type == "pattern" && (
                <p className="text-red-500 text-md">
                    {errors.password.message}
                </p>
            )}
        </div>
    );
};

export const ConfirmPasswordInput: React.FC<InputProps> = ({
    register,
    errors,
}) => {
    const { t } = useTranslation("common");

    return (
        <div className="mb-4 w-full">
            <label
                className="block text-gray-700 text-sm font-bold mb-2"
                id="confirm_password"
            >
                Confirm password
            </label>
            <input
                id="confirm_password"
                className={` ${
                    errors.confirm_password ? "border-red-500" : "border-dark"
                }
                focus:border-primary 
                 shadow bg-light appearance-none border-2 rounded w-full py-2 px-3
                 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline
                 `}
                type="password"
                placeholder="Confirm password"
                {...register("confirm_password", {
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
            {errors.confirm_password?.type == "required" ? (
                <p className="text-red-500 text-md italic">
                    {errors.confirm_password.message}
                </p>
            ) : (
                <></>
            )}
        </div>
    );
};
