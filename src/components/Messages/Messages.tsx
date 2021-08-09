import React, { useEffect, useState } from "react";

import { useQuery, gql } from "@apollo/client";
import { LOAD_MESSAGES } from "../../GraphQL/Queries";

export const Messages = () => {
    const { error, loading, data } = useQuery(LOAD_MESSAGES);

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        console.log(`data :: ${data}`);
        // setMessages(data.getMessages);
    }, [data]);

    return (
        <div>
            {messages.map((message) => (
                <p>{message}</p>
            ))}
        </div>
    );
};
