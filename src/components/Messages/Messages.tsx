import React, { useEffect, useState } from "react";

import { useQuery, gql } from "@apollo/client";
import { LOAD_MESSAGES } from "../../GraphQL/Queries";
import { Message, MessageTypeEnum } from "../Message/Message";

export const Messages = () => {
    const { error, loading, data } = useQuery(LOAD_MESSAGES, {
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
    }, [data]);

    const getMessageType = (userName: string) =>
        userName === adminUserName
            ? MessageTypeEnum.MODERATOR
            : MessageTypeEnum.USER;

    useEffect(() => console.log(`messages : ${messages}`), [messages]);

    return (
        <div>
            {/* {Object.values(messages).map((message) => (
                <p>{Object.keys(message)}</p>
            ))} */}
            {messages &&
                messages.map((message) => (
                    <Message type={getMessageType(message.senderName)}>
                        {message.body}
                    </Message>
                ))}
        </div>
    );
};
