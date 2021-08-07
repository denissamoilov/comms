import React from "react";
import styled from "styled-components";

const StyledChat = styled.div`
    background: #fff;
    border-radius: 16px;
    box-shadow: 0 0 24px rgba(0, 0, 0, 0.16);
    display: flex;
    height: 100%;
    flex-direction: column;
    max-height: 685px;
    max-width: 480px;
    min-width: 320px;
    overflow: hidden;
    width: 100%;
`;

export const Chat = ({
    children,
    ...rest
}: React.ComponentPropsWithoutRef<"div">) => {
    return <StyledChat {...rest}>{children}</StyledChat>;
};
