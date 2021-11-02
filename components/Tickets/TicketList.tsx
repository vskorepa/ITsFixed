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
const TicketList = () => {
    const { t } = useTranslation("common");
    const [page, setPage] = useState(0);
    const { data, isLoading, refetch } = useTickets(page + 1);
    return (
        <div className="flex w-screen h-screen">
            <div className="flex flex-col flex-shrink-0 w-120 gap-4 overflow-x-scroll overflow-scroll">
                {data?.ticketData.map((item) => (
                    <TicketInList key={item.id} ticketData={item} />
                ))}
            </div>
            <div className="flex flex-col flex-grow"></div>
        </div>

        // <div className="container px-5 py-24 mx-auto">
        //     <div className="flex flex-wrap -m-4">
        //         {data?.ticketData.map((item) => (
        //             <TicketInList key={item.id} ticketData={item} />
        //         ))}
        //     </div>
        //     <div className="pt-6 flex text-xl justify-evenly items-stretch">
        //         <button
        //             onClick={async () => {
        //                 setPage(page != 1 ? page - 1 : page);
        //                 await refetch();
        //             }}
        //         >
        //             <MdOutlineArrowBackIosNew />
        //         </button>
        //         <button
        //             onClick={async () => {
        //                 setPage(page + 1);
        //                 await refetch();
        //             }}
        //         >
        //             <MdOutlineArrowForwardIos />
        //         </button>
        //     </div>
        // </div>
    );
};
export default TicketList;
