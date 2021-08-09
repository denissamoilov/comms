import { gql } from "@apollo/client"
  
export const LOAD_MESSAGES = gql`
    query getMessages(
        $limit: Int
        $offset: Int
        $order_by: [messages_order_by!]
    ) {
        messages(
            limit: $limit
            offset: $offset
            order_by: $order_by
        ) {
            id
            body
            senderName
        }
    }
`