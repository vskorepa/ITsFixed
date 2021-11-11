import { Avatar, Button } from "@nextui-org/react";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { SignInValues } from "../../types/formtypes";
import { supabase } from "../../lib/supabaseClient";
import { useState } from "react";
import { useRouter } from "next/router";
import useLogoutUser from "../../hooks/login/useLogoutUser";
import { BiLogOut } from "react-icons/bi";

const SignOut = () => {
    const router = useRouter();
    const LogoutMutation = useLogoutUser();
    if (LogoutMutation.isSuccess) {
        router.push("/");
    }
    return <div></div>;
};

export default SignOut;
