import { definitions } from "./supabase";

export type typeUser = {
    email: string;
    password: string;
    name: string;
    surname: string;
};
export type TicketBasicInfo = definitions["ticket"] & {
    users: definitions["users"];
    tickettype: definitions["tickettype"];
};
