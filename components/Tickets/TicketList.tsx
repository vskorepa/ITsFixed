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
import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { SingUpValues } from "../../types/formtypes";
import { supabase } from "../../lib/supabaseClient";
import { useState } from "react";
import { useRouter } from "next/router";
import useCreateUser from "../../hooks/login/useCreateUser";
import useTranslation from "next-translate/useTranslation";
import useTickets from "../../hooks/tickets/useTickets";
import TicketInList from "./TicketInList";
import {
    MdOutlineArrowBackIosNew,
    MdOutlineArrowForwardIos,
} from "react-icons/md";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.css";
import TicketDetail from "./TicketDetail";
import { TicketBasicInfo } from "../../types/supabaseTypes";
import TicketsNav from "../Nav/TicketsNav";

const TicketList = () => {
    const { t } = useTranslation("common");
    const [page, setPage] = useState(0);
    const { data, isLoading, refetch } = useTickets(page + 1);
    const router = useRouter();
    return (
        <div className="flex flex-row w-screen flex-wrap">
            <TicketsNav></TicketsNav>
            <div className="flex flex-row w-full">
                <SimpleBar className="w-1/3 overflow-y-auto max-h-80vh pr-3">
                    {data?.ticketData.map((item) => (
                        <TicketInList key={item.id} ticketData={item} />
                    ))}
                </SimpleBar>
                <TicketDetail
                    key={router.query.ticketId}
                    id={router.query.ticketId ?? ""}
                />

                {/* <div className="flex justify-center w-2/3">
                    <Text key={ticketDetail?.id} h1 color="success">
                        {ticketDetail?.id ?? "TICKET DETAIL:"}
                    </Text>
                </div> */}
            </div>
        </div>
    );
};
export default TicketList;
