import React from "react";
import { Chat } from "./components/Chat/Chat";
import { Flex } from "./components/Flex/Flex";

import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    createHttpLink,
} from "@apollo/client";

import { setContext } from "@apollo/client/link/context";

export const App = () => {
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

    return (
        <ApolloProvider client={client}>
            <Flex alignItems="center" justifyContent="center">
                <Chat />
            </Flex>
        </ApolloProvider>
    );
};

export default App;
