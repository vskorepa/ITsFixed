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
import React, { useEffect } from "react";
import useTranslation from "next-translate/useTranslation";
import useTicketDetail from "../../hooks/tickets/useTicketDetail";
import { FaRegCircle, FaMinus } from "react-icons/fa";
type TicketDetailProps = {
    id: string;
    onClick: () => void;
};

const TicketDetail: React.FC<TicketDetailProps> = ({ id, onClick }) => {
    const { t } = useTranslation("common");

    const { data, isLoading, error } = useTicketDetail(id);
    return (
        <div className="h-full flex flex-wrap w-2/3">
            <div className="h-1/4 bg-gray-300 w-full justify-center">
                <div className="flex flex-nowrap justify-between p-3 items-center">
                    <Text color="success">TICKET NUMBER:</Text>
                    {isLoading ? (
                        <Loading />
                    ) : (
                        <Text color="success">
                            TICKET NUMBER: {data?.id ?? ""}
                        </Text>
                    )}

                    <div className="flex-nowrap flex gap-2 items-center">
                        <Text weight="bold">Is activated:</Text>
                        <Switch
                            disabled
                            bordered={true}
                            color="success"
                            size="large"
                            checked={data?.isalive}
                            iconOn={<FaRegCircle />}
                            iconOff={<FaMinus />}
                        />
                    </div>
                </div>
            </div>
            <div className="h-3/4 w-full bg-gray-200"></div>
        </div>
    );
};
export default TicketDetail;
