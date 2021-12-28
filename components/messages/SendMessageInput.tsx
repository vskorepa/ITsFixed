import React from "react";

type MessageProps = {
    content: string;
    onSend: () => void;
};

export const SendMessageInput: React.FC<MessageProps> = ({
    content,
    onSend,
}) => {
    return (
        <div className="w-max ml-auto break-all mt-2 mb-1 p-2 rounded-br-none max-w-md bg-primary rounded-2xl text-dark text-left mr-5">
            {content}
        </div>
    );
};
