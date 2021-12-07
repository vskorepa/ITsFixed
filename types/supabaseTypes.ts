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
};
export type CreateTicketType = definitions["tickets"];
