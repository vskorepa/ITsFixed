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
import TicketInList from "./TicketInList";

const TicketList = () => {
    const { t } = useTranslation("common");

    const { data, isLoading } = useTickets();
    console.log(data);
    return (
        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
                {data?.map((item) => (
                    <TicketInList key={item.id} ticketData={item} />
                ))}
            </div>
        </div>
    );
};
export default TicketList;
