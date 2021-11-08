import React from "react";
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
import { SubmitHandler, useForm } from "react-hook-form";
import { TicketBasicInfo } from "../../../types/supabaseTypes";
const ModalBody: React.FC = () => {
    const { t } = useTranslation("common");
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<TicketBasicInfo>();
    const onSubmit: SubmitHandler<TicketBasicInfo> = (data) => {};

    return (
        <Modal.Body>
            <form
                className="flex flex-col items-center gap-5"
                onSubmit={handleSubmit(onSubmit)}
            >
                <select {...(register("ticket_type_id"), {})}>
                    <option value={0}>Printers Problem</option>
                    <option value={1}>Windows10 Problem</option>
                </select>
                <Textarea
                    {...register("description")}
                    placeholder="Static rows, rows (4)"
                    rows={4}
                />
            </form>
        </Modal.Body>
    );
};

export default ModalBody;
