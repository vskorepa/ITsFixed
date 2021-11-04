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
import { TicketBasicInfo } from "../../types/supabaseTypes";
import useTicketDetail from "../../hooks/tickets/useTicketDetail";
import { data } from "autoprefixer";
type TicketDetailProps = {
    id: string;
};

const TicketDetail: React.FC<TicketDetailProps> = ({ id }) => {
    const { t } = useTranslation("common");
    const { data, isLoading, error } = useTicketDetail(id);
    return (
        <div className="flex flex-wrap w-2/3 justify-center">
            <div>
                <Text h1 color="success">
                    TICKET NUMBER: {data?.id}
                </Text>
            </div>
        </div>
    );
};
export default TicketDetail;
