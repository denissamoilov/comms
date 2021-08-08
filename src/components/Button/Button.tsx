import React, { ReactNode } from "react";
import styled from "styled-components";

export enum ButtonColorEnum {
    DEFAULT = "default",
    WHITE = "white",
}

const StyledButton = styled.button.attrs(
    (props: { color: ButtonColorEnum }) => props
)`
    align-items: center;
    background: none;
    border-radius: 8px;
    border: 0;
    color: #8696a2;
    display: flex;
    cursor: pointer;
    outline: none;
    padding: 8px;
    transition: background-color 250ms ease-in-out;

    &:hover {
        background-color: ${(props) =>
            props.color === ButtonColorEnum.WHITE ? "#fafafa" : "#dadddd"};
    }
`;

const StyledIcon = styled.span`
    display: block;
    height: 24px;
    width: 24px;
`;

type ButtonProps = {
    prependIcon?: ReactNode;
    color?: ButtonColorEnum;
} & React.HTMLAttributes<HTMLButtonElement>;

export const Button = ({
    children,
    color,
    prependIcon,
    ...rest
}: ButtonProps) => {
    return (
        <StyledButton color={color} {...rest}>
            {prependIcon && <StyledIcon>{prependIcon}</StyledIcon>}
            {children}
        </StyledButton>
    );
};
