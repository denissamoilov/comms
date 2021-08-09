import React from "react";
import styled from "styled-components";
import { Flex } from "../Flex/Flex";

const StyledChatContent = styled.div`
    background: #fff;
    height: 100%;
    overflow-y: auto;
    padding: 16px 24px;
    overscroll-behavior-y: contain;
    scroll-snap-type: y proximity;
`;

const StyledFlex = styled(Flex)`
    & > div:last-child {
        scroll-snap-align: end;
    }
`;

export const ChatContent = ({
    children,
    ...rest
}: React.ComponentPropsWithRef<"div">) => (
    <StyledChatContent {...rest}>
        <StyledFlex direction="column">{children}</StyledFlex>
    </StyledChatContent>
);
