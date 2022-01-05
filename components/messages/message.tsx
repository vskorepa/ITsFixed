import React from 'react'

type MessageProps = {
    content: string
    id: string
}

export const SentMessage: React.FC<MessageProps> = ({ content, id }) => {
    return (
        <div
            id={id}
            className="w-max z-0 ml-auto break-all mt-2 mb-1 p-2 rounded-br-none max-w-md bg-primary rounded-2xl text-dark text-left mr-5 whitespace-pre"
        >
            <p>{content}</p>
        </div>
    )
}

export const RecievedMessage: React.FC<MessageProps> = ({ content, id }) => {
    return (
        <div
            id={id}
            className="w-max z-0 break-all mt-2 ml-5 rounded-bl-none float-none max-w-md bg-secondary mr-auto rounded-2xl p-2 whitespace-pre"
        >
            <p>{content}</p>
        </div>
    )
}
