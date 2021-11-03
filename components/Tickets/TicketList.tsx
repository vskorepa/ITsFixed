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
const TicketList = () => {
    const { t } = useTranslation("common");
    const [page, setPage] = useState(0);
    const { data, isLoading, refetch } = useTickets(page + 1);
    const [detailId, setDetailId] = useState(0);
    return (
        <div className="flex flex-row w-screen">
            <div></div>
            <div className="flex flex-row w-full">
                <SimpleBar className="min-w-35vw max-h-85vh" autoHide={false}>
                    {data?.ticketData.map((item) => (
                        <TicketInList key={item.id} ticketData={item} />
                    ))}
                </SimpleBar>
                <div className="flex justify-center w-full flex-grow">
                    <Text h1 color="success">
                        Ticket Detail:
                    </Text>
                </div>
            </div>
        </div>
    );
};
export default TicketList;
