import React from "react";
import { SentMessage, RecievedMessage } from "./message";

type chatProps = {
    messages: {
        content: string;
        state: string;
    }[];
};

const Chat: React.FC<chatProps> = ({ messages }) => {
    return (
        <div className="flex flex-col mt-2 overflow-y-scroll space-y-3 mb-20 pb-3 ">
            {messages.map((message) => {
                return message.state == "sent" ? (
                    <SentMessage content={message.content} />
                ) : (
                    <RecievedMessage content={message.content} />
                );
            })}
        </div>
    );
};

export default Chat;
