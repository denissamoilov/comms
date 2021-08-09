import { gql } from "@apollo/client"
  
enum Sort {
    asc = "asc",
    desc = "desc"
}
  
type OrderById  = {
    content: Sort
}

type OrderByBody = {
    content: Sort
}

type OrderBySenderName = {
    content: Sort
}

type OrderBy = OrderById | OrderByBody | OrderBySenderName;
  
export const LOAD_MESSAGES = gql`
    query getMessages($limit: Int! $offset: Int! $order_by: OrderBy ) {
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