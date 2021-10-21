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
import { BiError, BiCheckCircle } from "react-icons/bi";
import { TicketBasicInfo } from "../../types/supabaseTypes";

type TicketInListProps = {
    ticketData: TicketBasicInfo;
};

const TicketInList: React.FC<TicketInListProps> = (data) => {
    const { t } = useTranslation("common");

    console.log(data.ticketData.isalive);
    return (
        <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-800 text-green-400 mb-4">
                    {data.ticketData.isalive ? (
                        <BiCheckCircle size="30" className="text-primary" />
                    ) : (
                        <BiError size="30" className="text-warning" />
                    )}
                </div>
                <h2 className="text-lg text-white font-medium title-font mb-2">
                    {data.ticketData.tickettype.name}
                </h2>
                <p className="leading-relaxed text-base">
                    {data.ticketData.description.substr(0, 55)}
                    {data.ticketData.description.length > 55 ? "..." : ""}
                </p>
            </div>
        </div>
    );
};
export default TicketInList;
