import React, { useState } from "react";
import {
    Button,
    Input,
    Modal,
    Text,
    Checkbox,
    Row,
    Textarea,
} from "@nextui-org/react";
import useTranslation from "next-translate/useTranslation";
import ModalBody from "./ModalBody";
import { SubmitHandler, useForm } from "react-hook-form";
import { CreateTicketType } from "../../../types/supabaseTypes";
import useCreateTicket from "../../../hooks/tickets/useCreateTicket";
import { data } from "autoprefixer";

type createTicketProps = {
    visible: boolean;
    close: () => void;
};

const CreateTicket: React.FC<createTicketProps> = ({ close, visible }) => {
    const { t } = useTranslation("common");
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<CreateTicketType>();
    const [description, setdescription] = useState("");
    const [ticketType, setTicketType] = useState(0);

    const onSubmit: SubmitHandler<CreateTicketType> = (data) => {
        setTicketType(data.ticket_type_id!);
        setdescription(data.description!);
        TicketMutation.mutate();
    };
    const TicketMutation = useCreateTicket({
        id: "8458f094-9cb5-41fa-9ecf-b75de83bd0d3",
        description: description,
        ticket_type_id: ticketType,
        created_at: "1999-12-31T23:00:00.000Z",
    });

    return (
        <Modal
            closeButton
            preventClose
            aria-labelledby="modal-title"
            open={visible}
            onClose={close}
        >
            <form
                className="flex flex-col items-center gap-5"
                onSubmit={handleSubmit(onSubmit)}
            >
                <Modal.Header>
                    <Text id="modal-title" size={18}>
                        Create yours ticket
                    </Text>
                </Modal.Header>

                <Modal.Body>
                    <select
                        {...register("ticket_type_id", {
                            valueAsDate: true,
                        })}
                    >
                        <option value={0}>Printers Problem</option>
                        <option value={1}>Windows10 Problem</option>
                    </select>
                    <Textarea
                        {...register("description")}
                        placeholder="Static rows, rows (4)"
                        rows={4}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button auto flat color="error" onClick={close}>
                        {t("close")}
                    </Button>
                    <Button type="submit" auto onClick={close}>
                        {t("submit")}
                    </Button>
                </Modal.Footer>
            </form>
        </Modal>
    );
};

export default CreateTicket;
