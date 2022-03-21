import React from 'react'

type MessageProps = {
    content: string
    id: string
}

export const SentMessage: React.FC<MessageProps> = ({ content, id }) => {
    return (
        // <div
        //     id={id}
        //     className="max-w-2/5 w-fit z-0 ml-auto mt-2 mb-1 p-2 rounded-br-none bg-primary rounded-2xl text-dark text-left mr-5 whitespace-pre"
        // >
        <p
            id={id}
            className="break-words max-w-3/5 w-fit z-0 ml-auto mt-2 mb-1 p-2 rounded-br-none bg-primary rounded-2xl text-dark text-left mr-5 whitespace-pre-wrap"
        >
            {content}
        </p>
        //     <p className="break-words ">{content}</p>

        // </div>
    )
}

export const RecievedMessage: React.FC<MessageProps> = ({ content, id }) => {
    return (
        // <div
        //     id={id}
        //     className="flex flex-wrap ax-w-2/5 w-fit z-0 break-all mt-2 ml-5 rounded-bl-none float-none bg-secondary mr-auto rounded-2xl p-2 whitespace-pre"
        // >
        //                 <p className="">{content}</p>

        <p
            id={id}
            className="max-w-3/5 w-fit z-0 break-words mt-2 ml-5 rounded-bl-none float-none bg-secondary mr-auto rounded-2xl p-2 whitespace-pre-wrap"
        >
            {content}
        </p>
        // </div>
    )
}
