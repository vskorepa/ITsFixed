import { definitions } from "./supabase";

export type SignUpValues = {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    confirm_password: string;
};
export type SignInValues = {
    email: string;
    password: string;
};
export type CreateTicketValues = {
    ticket_type_id: number;
    description: string;
};
export type MessageValuse = {
    messages: definitions["messages"];
};
