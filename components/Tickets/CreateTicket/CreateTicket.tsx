import React, { useState } from "react";
import { Modal } from "@nextui-org/react";
import useTranslation from "next-translate/useTranslation";
import { SubmitHandler, useForm } from "react-hook-form";
import useCreateTicket from "../../../hooks/tickets/useCreateTicket";
import { CreateTicketModalForm } from "../../ReactHookForm/Forms";
import { CreateTicketValues } from "../../../types/formtypes";
import useTicketType from "../../../hooks/tickets/useTicketType";

type createTicketProps = {
    visible: boolean;
    close: () => void;
};

const CreateTicket: React.FC<createTicketProps> = ({ close, visible }) => {
    const { t } = useTranslation("common");
    const [description, setdescription] = useState("");
    const [ticketType, setTicketType] = useState(0);
    const { data, isLoading, error } = useTicketType();
    const onSubmit: SubmitHandler<CreateTicketValues> = (data) => {
        console.log(data);
        setTicketType(data.ticket_type_id!);
        setdescription(data.description!);
        TicketMutation.mutate();
    };
    console.log(ticketType);
    const TicketMutation = useCreateTicket({
        description: description,
        ticket_type_id: ticketType,
    });

    return (
        <Modal
            closeButton
            preventClose
            aria-labelledby="modal-title"
            open={visible}
            onClose={close}
        >
            <CreateTicketModalForm
                options={data ?? []}
                OnFormSubmit={(data) => onSubmit(data)}
            />
        </Modal>
    );
};

export default CreateTicket;
