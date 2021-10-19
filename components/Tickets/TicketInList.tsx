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
import useTickets from "../../hooks/tickets/useTickets";
import BsCheckCircleFill from "react-icons/bs";
type TicketInListProps = {
    data: TicketBasicInfo;
};

type TicketBasicInfo = {
    userEmail: String;
    UserName: String;
    ProblemName: string;
    ProblemDescription: string;
};
const TicketInList: React.FC<TicketInListProps> = (data) => {
    const { t } = useTranslation("common");

    console.log(data);
    return (
        <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-800 text-green-400 mb-4"></div>
                <h2 className="text-lg text-white font-medium title-font mb-2">
                    The Catalyzer
                </h2>
                <p className="leading-relaxed text-base">
                    Fingerstache flexitarian street art 8-bit waist co, subway
                    tile poke farm.
                </p>
            </div>
        </div>
    );
};
export default TicketInList;
