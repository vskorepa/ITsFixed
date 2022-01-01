import { definitions } from "./supabase";

export type typeUser = {
    email: string;
    password: string;
    first_name: string;
    last_name: string;
};
export type TicketBasicInfo = definitions["tickets"] & {
    users: definitions["users"];
    ticket_type: definitions["ticket_type"];
    messages: definitions["messages"];
};
export type CreateTicketProps = {
    ticket_type_id: number;
    description: string;
    user_id: string;
};
export type UpdateStateProps = {
    id: string;
    state: string;
};
export type SendMessageProps = {
    message: string;
    user_id?: string;
    ticket_id?: string;
};
export type Messages = {
    messages: definitions["messages"][];
};
