import React, { useEffect, useState } from "react";

import { useQuery } from "@apollo/client";
import { LOAD_MESSAGES } from "../../GraphQL/Queries";
import { Message, MessageTypeEnum } from "../Message/Message";

type MessagesProps = {
    messageSending: boolean;
};

export const Messages = ({ messageSending }: MessagesProps) => {
    const { data, refetch } = useQuery(LOAD_MESSAGES, {
        variables: {
            order_by: { id: "asc" },
        },
    });

    const adminUserName = "Kubota";

    type MessageType = {
        body: string;
        id: number;
        senderName: string;
        __typename: string;
    };

    const [messages, setMessages] = useState<MessageType[]>();

    useEffect(() => {
        data && setMessages(data.messages);
    }, [data, messageSending]);

    useEffect(() => {
        !messageSending && refetch();
    }, [messageSending, refetch]);

    const getMessageType = (userName: string) =>
        userName === adminUserName
            ? MessageTypeEnum.MODERATOR
            : MessageTypeEnum.USER;

    return (
        <div>
            {messages &&
                messages.map((message) => (
                    <Message
                        key={message.id}
                        type={getMessageType(message.senderName)}
                    >
                        {message.body}
                    </Message>
                ))}
        </div>
    );
};
