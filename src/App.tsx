import React from "react";
import { Button } from "./components/Button/Button";
import { Chat } from "./components/Chat/Chat";
import { ChatHeader } from "./components/ChatHeader/ChatHeader";
import { User } from "./components/molecules/User/User";
import { StatusTypeEnum } from "./components/Status/Status";
import { XIcon, VolumeUpIcon } from "@heroicons/react/outline";
import { Flex } from "./components/Flex/Flex";
import { ChatFooter } from "./components/ChatFooter/ChatFooter";
import { ChatContent } from "./components/ChatContent/ChatContent";
import { Message, MessageTypeEnum } from "./components/Message/Message";

import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    HttpLink,
    from,
    createHttpLink,
} from "@apollo/client";

import { setContext } from "@apollo/client/link/context";

import { onError } from "@apollo/client/link/error";
import { Messages } from "./components/Messages/Messages";

const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
        graphQLErrors.map(({ message }) => {
            alert(`GraphQL error ${message}`);
        });
    }
});

const httpLink = createHttpLink({
    uri: "https://guided-ferret-24.hasura.app/v1/graphql",
});

const authLink = setContext((_, { headers }) => {
    return {
        headers: {
            ...headers,
            "x-hasura-admin-secret":
                "eVsdOYwA85ygQDejX1eojS1A2OLab4d2tZb3aWWXJuQUrpSk7euySuWvCbIuxen5",
        },
    };
});

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(httpLink),
});

export const App = () => {
    const userLanguages = [
        {
            country: "GB",
        },
        {
            country: "EE",
        },
    ];

    return (
        <ApolloProvider client={client}>
            <Flex alignItems="center" justifyContent="center">
                <Chat>
                    <ChatHeader>
                        <User
                            statusType={StatusTypeEnum.ONLINE}
                            userName="Kubota"
                            languages={userLanguages}
                        />
                        <Flex alignItems="center">
                            <Button prependIcon={<VolumeUpIcon />} />
                            <Button prependIcon={<XIcon />} />
                        </Flex>
                    </ChatHeader>
                    <ChatContent>
                        <Messages />
                    </ChatContent>
                    <ChatFooter />
                </Chat>
            </Flex>
        </ApolloProvider>
    );
};

export default App;
