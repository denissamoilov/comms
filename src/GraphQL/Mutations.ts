import { gql } from "@apollo/client";

export const ADD_MESSAGE_MUTATION = gql`
    mutation sendMessage($body: String!, $senderName: String!) {
        insert_messages_one(object: { body: $body, senderName: $senderName }) {
            id
            body
            senderName
        }
    }
`;
