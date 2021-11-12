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
import { GrDocumentTime } from "react-icons/gr";

type TicketInListProps = {
    ticketData: TicketBasicInfo;
};

const TicketInList: React.FC<TicketInListProps> = (data) => {
    const { t } = useTranslation("common");
    const router = useRouter();
    const Now = Date.now();
    const CreatedAt = new Date(data.ticketData.created_at!);
    const Test = CreatedAt.getTime() - Now;
    // const startTime = () => {
    //     let h =
    // }

    return (
        <div
            onClick={() => {
                router.push({
                    pathname: "/tickets",
                    query: { ticketId: data.ticketData.id },
                });
            }}
            className="border-b cursor-pointer border-gray-700 border-opacity-75 p-6 dark:hover:bg-gray-900 hover:bg-gray-100"
        >
            <div className="w-full h-auto inline-flex items-center justify-between rounded-full mb-4">
                <div className="flex gap-2">
                    {data.ticketData.isalive ? (
                        <BiError size="30" className="text-warning" />
                    ) : (
                        <BiCheckCircle size="30" className="text-primary" />
                    )}
                    <Text className="self-center">{Test}</Text>
                </div>

                <div className="flex-nowrap">
                    <Text>
                        <strong>User:</strong> {data.ticketData.users.email}
                    </Text>
                </div>
            </div>

            <h2 className="text-lg font-medium title-font mb-2">
                {data.ticketData.tickettype.name}
            </h2>
            <p className="leading-relaxed text-base">
                {data.ticketData.description?.substr(0, 100)}
                {(data.ticketData.description?.length ?? 0 > 100) && "..."}
            </p>
        </div>
        // </div>
    );
};
export default TicketInList;
