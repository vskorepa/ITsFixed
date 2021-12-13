import {
    Container,
    Row,
    Input,
    Loading,
    Button,
    Spacer,
    Text,
    Col,
    Switch,
} from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import useTranslation from "next-translate/useTranslation";
import useTicketDetail from "../../hooks/tickets/useTicketDetail";
import { FaRegCircle, FaMinus } from "react-icons/fa";
import useUpdateTicket from "../../hooks/tickets/useUpdateTicket";
import { supabase } from "../../lib/supabaseClient";
type TicketDetailProps = {
    id: string;
    onClick: () => void;
};

const TicketDetail: React.FC<TicketDetailProps> = ({ id, onClick }) => {
    const { t } = useTranslation("common");

    const TicketFinish = () => {
        TicketMutation.mutate();
    };
    const { data, isLoading, error } = useTicketDetail(id);
    const TicketMutation = useUpdateTicket({
        id: id,
        state: "done",
    });
    // console.log(data);
    return (
        <div className="h-full flex flex-wrap w-2/3">
            <div className="h-1/3 w-full justify-center">
                <div className="flex flex-nowrap justify-between p-3 items-center">
                    {isLoading ? (
                        <Loading />
                    ) : (
                        <Text color="success">
                            {t("ticketNumber")} {data?.id ?? ""}
                        </Text>
                    )}

                    <div className="flex-wrap flex gap-2 items-center">
                        {isLoading ? (
                            <Loading size="medium" />
                        ) : (
                            <Text weight="bold">
                                {data ? t(`${data?.state}`) : "Ticket state:"}
                            </Text>
                        )}
                        <Button onClick={() => TicketFinish()} auto>
                            Finish
                        </Button>
                    </div>
                </div>
                <Text>{data?.users.first_name}</Text>
                <Text>{data?.users.last_name}</Text>
                <Text>{data?.users.email}</Text>

                <Text>{data?.description}</Text>
            </div>
            <div className="h-2/3 w-full bg-gray-200 dark:bg-gray-800"></div>
        </div>
    );
};
export default TicketDetail;
