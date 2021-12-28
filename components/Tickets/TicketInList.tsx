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
import { supabase } from "../../lib/supabaseClient";
import { useState } from "react";
import { useRouter } from "next/router";
import useCreateUser from "../../hooks/login/useCreateUser";
import useTranslation from "next-translate/useTranslation";
import useTickets from "../../hooks/tickets/useTickets";
import { BiError, BiCheckCircle } from "react-icons/bi";
import { TicketBasicInfo } from "../../types/supabaseTypes";
import { GrDocumentTime } from "react-icons/gr";
import moment from "moment-timezone";
type TicketInListProps = {
    ticketData: TicketBasicInfo;
};

const TicketInList: React.FC<TicketInListProps> = (data) => {
    const { t } = useTranslation("common");
    const router = useRouter();
    const createdAt = moment(data.ticketData.created_at).tz(
        "Europe/Prague",
        true
    );
    return (
        <div
            onClick={() => {
                router.push({
                    pathname: "/tickets",
                    query: { ticketId: data.ticketData.id },
                });
            }}
            className="border-b cursor-pointer odd:bg-white even:bg-light dark:odd:bg-black dark:even:bg-dark visited:bg-primary active:bg-secondary  border-gray-700 border-opacity-75 p-6 dark:hover:bg-gray-800 hover:bg-gray-100"
        >
            <div className="w-full h-auto inline-flex items-center justify-between rounded-full mb-4">
                <div
                    className={`
                    flex gap-2
                     ${data.ticketData.state == "waiting" && "text-brown"}
                     ${data.ticketData.state == "ongoing" && "text-secondary"}
                     ${data.ticketData.state == "done" && "text-primary"}
                     `}
                >
                    {t(data.ticketData.state!)}
                </div>

                <div className="flex-nowrap">
                    <Text>
                        <strong>{t("user")}</strong>{" "}
                        {data.ticketData.users.email}
                    </Text>
                </div>
            </div>

            <h2 className="text-lg font-medium title-font mb-2">
                {data.ticketData.ticket_type.name}
            </h2>
            <div className="flex justify-between">
                <p className="leading-relaxed text-base">
                    {data.ticketData.description?.substr(0, 100)}
                    {(data.ticketData.description?.length ?? 0 > 100) && "..."}
                </p>
                <p>{createdAt.fromNow()}</p>
            </div>
        </div>
        // </div>
    );
};
export default TicketInList;
