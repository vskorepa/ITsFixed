import React, { useState } from "react";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.css";
import { SendMassageForm } from "../ReactHookForm/Forms";
import { SentMessage, RecievedMessage } from "./message";
import { SubmitHandler, useFormState } from "react-hook-form";
import { MessageValuse } from "../../types/formtypes";
import useSendMessage from "../../hooks/messages/sendMessage";
import { Messages, SendMessageProps } from "../../types/supabaseTypes";
import { useRouter } from "next/router";
import { supabase } from "../../lib/supabaseClient";

const Chat: React.FC<Messages> = ({ messages }) => {
    const [message, setMessage] = useState("");
    const [ticket_id, setTicket_id] = useState("");

    const router = useRouter();
    const onSubmit: SubmitHandler<SendMessageProps> = (data) => {
        console.log(data);
        setMessage(data.message);
        setTicket_id(router.query.ticketId);
        SendMessageMutation.mutate();
    };

    const SendMessageMutation = useSendMessage({
        message: message,
        ticket_id: ticket_id,
    });
    return (
        <div>
            <SimpleBar className="w-full flex flex-col max-h-96 overflow-y-auto mt-1 mb-10">
                {messages
                    ? messages.map((message) => {
                          return message.user_id == supabase.auth.user()?.id ? (
                              <SentMessage
                                  key={message.insert_at}
                                  content={message.message!}
                              />
                          ) : (
                              <RecievedMessage
                                  key={message.insert_at}
                                  content={message.message!}
                              />
                          );
                      })
                    : ""}
            </SimpleBar>
            <SendMassageForm OnFormSubmit={(data) => onSubmit(data)} />
        </div>
    );
};

export default Chat;
