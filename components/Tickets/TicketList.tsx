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

const TicketList = () => {
    const { t } = useTranslation("common");

    const { data, isLoading } = useTickets();
    console.log(data);
    return (
        <table className="table-auto w-full border-collapse">
            <tr className="table-row">
                <th className="table-cell border">Users name</th>
                <th className="table-cell border">Users email</th>
                <th className="table-cell border">Ticket type</th>
            </tr>
            {data?.map((item) => (
                <tr key={item.id} className="table-row justify-center">
                    <td className="table-cell border">{item.users.name}</td>
                    <td className="table-cell border">{item.users.email}</td>
                    <td className="table-cell border">
                        {item.tickettype.name}
                    </td>
                </tr>
            ))}
        </table>
    );
};
export default TicketList;
