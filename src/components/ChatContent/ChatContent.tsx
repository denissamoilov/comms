import React from "react";
import styled from "styled-components";

const StyledChatContent = styled.div`
    background: #fff;
    height: 100%;
    overflow-y: auto;
    padding: 16px 24px;
`;

export const ChatContent = ({
    children,
    ...rest
}: React.ComponentPropsWithRef<"div">) => (
    <StyledChatContent {...rest}>{children}</StyledChatContent>
);
