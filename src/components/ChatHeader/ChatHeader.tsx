import React from "react";
import styled from "styled-components";

const StyledChatHeader = styled.div`
    background: #f2f5f6;
    display: flex;
    flex-direction: row;
    flex-shrink: 0;
    justify-content: space-between;
    overflow: hidden;
    padding: 16px 24px;
`;

export const ChatHeader = ({
    children,
    ...rest
}: React.ComponentPropsWithoutRef<"div">) => {
    return <StyledChatHeader {...rest}>{children}</StyledChatHeader>;
};
