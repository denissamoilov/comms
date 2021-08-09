import React from "react";
import styled from "styled-components";

export enum MessageTypeEnum {
    USER = "user",
    MODERATOR = "moderator",
}

type MessageProps = {
    type: MessageTypeEnum;
} & React.ComponentPropsWithoutRef<"div">;

const StyledMessage = styled.div.attrs(
    (props: { type: MessageTypeEnum }) => props
)`
    align-self: ${(props) =>
        props.type === MessageTypeEnum.USER ? "flex-start" : "flex-end"};
    background: ${(props) =>
        props.type === MessageTypeEnum.USER ? "#F2F5F6" : "#282E36"};
    border-radius: 8px;
    color: ${(props) =>
        props.type === MessageTypeEnum.USER ? "#2C333B" : "#fff"};
    margin: ${(props) =>
        props.type === MessageTypeEnum.USER ? "8px 48px 0 0" : "8px 0 0 48px"};
    padding: 8px 12px;
    font-size: 14px;

    &:first-child {
        margin-top: 0;
    }
`;

export const Message = ({ children, type, ...rest }: MessageProps) => (
    <StyledMessage type={type} {...rest}>
        {children}
    </StyledMessage>
);
