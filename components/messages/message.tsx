import React from "react";

type MessageProps = {
    content: string;
};

export const SentMessage: React.FC<MessageProps> = ({ content }) => {
    return (
        <div className="w-max ml-auto break-all mt-2 mb-1 p-2 rounded-br-none bg-primary rounded-2xl text-dark text-left mr-5">
            {content}
        </div>
    );
};

export const RecievedMessage: React.FC<MessageProps> = ({ content }) => {
    return (
        <div className="other break-all mt-2  ml-5 rounded-bl-none float-none bg-secondary mr-auto rounded-2xl p-2">
            {content}
        </div>
    );
};
