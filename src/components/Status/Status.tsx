import React from "react";
import styled from "styled-components";

export enum StatusTypeEnum {
    DEFAULT = "default",
    ONLINE = "online",
    AWAY = "away",
    OFFLINE = "offline",
}

export enum StatusPositionEnum {
    TOP = "top",
    BOTTOM = "bottom",
}

type StatusProps = {
    type: StatusTypeEnum;
    position?: StatusPositionEnum;
} & React.ComponentPropsWithoutRef<"div">;

const StyledStatus = styled.div.attrs(
    (props: { position: StatusPositionEnum }) => props
)`
    background: #0ad664;
    border: 2px solid #fff;
    border-radius: 50%;
    bottom: ${(props) =>
        props.position === StatusPositionEnum.BOTTOM ? "0px" : "auto"};
    height: 8px;
    top: ${(props) =>
        props.position === StatusPositionEnum.TOP ? "0px" : "auto"};
    right: 0;
    position: absolute;
    width: 8px;
    z-index: 1;
`;

export const Status = ({ type, ...rest }: StatusProps) => (
    <StyledStatus {...rest} />
);
