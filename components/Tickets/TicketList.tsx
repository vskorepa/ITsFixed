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
    const [data, setTickets] = useState<TicketBasicInfo[]>();
    const router = useRouter();

    useEffect(() => {
        fetchTickets();
        const Subscription = supabase
            .from("tickets")
            .on("*", () => {
                console.log("tralala");
                fetchTickets();
            })
            .subscribe();
        return () => {
            supabase.removeSubscription(Subscription);
        };
    }, []);

    async function fetchTickets() {
        const { data, error } = await supabase
            .from<TicketBasicInfo>("tickets")
            .select(
                `
        id,
        state,
        description,
        created_at,
        ticket_type(
            name,
            description
        ),
        users:user_id(
            first_name,
            email
        )

    `
            )
            .eq("state", "waiting")
            .order("created_at");

        setTickets(data!);
    }
    console.log(data);
    return (
        <div className="flex flex-row w-screen h-full flex-wrap">
            <TicketsNav></TicketsNav>
            <div className="flex flex-row w-full h-80vh">
                <div className="w-1/3 h-80vh">
                    <SimpleBar className="w-full overflow-y-auto h-full pr-3">
                        {data?.map((item) => (
                            <TicketInList key={item.id} ticketData={item} />
                        ))}
                    </SimpleBar>
                </div>
                <TicketDetail
                    //@ts-ignore
                    key={router.query.ticketId}
                    //@ts-ignore
                    id={router.query.ticketId ?? null}
                />
            </div>
        </div>
    );
};
export default TicketList;
