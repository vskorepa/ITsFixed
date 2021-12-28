import React from "react";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.css";
import { SendMassageForm } from "../ReactHookForm/Forms";
import { SentMessage, RecievedMessage } from "./message";
import { SubmitHandler, useFormState } from "react-hook-form";
import { MessageValuse } from "../../types/formtypes";

type chatProps = {
    messages: {
        content: string;
        state: string;
    }[];
};

const Chat: React.FC<chatProps> = ({ messages }) => {
    const onSubmit: SubmitHandler<MessageValuse> = (data) => {
        console.log(data);
    };

    return (
        <div>
            <SimpleBar className="w-full flex flex-col max-h-96 overflow-y-auto mt-1 mb-10">
                {messages.map((message) => {
                    return message.state == "sent" ? (
                        <SentMessage content={message.content} />
                    ) : (
                        <RecievedMessage content={message.content} />
                    );
                })}
            </SimpleBar>
            <SendMassageForm OnFormSubmit={(data) => onSubmit(data)} />
        </div>
    );
};

export default Chat;
