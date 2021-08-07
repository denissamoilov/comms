import React, { ReactNode } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
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
        background-color: #eee;
    }
`;

const StyledIcon = styled.span`
    display: block;
    height: 24px;
    width: 24px;
`;

type ButtonProps = {
    prependIcon?: ReactNode;
} & React.HTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, prependIcon, ...rest }: ButtonProps) => {
    return (
        <StyledButton {...rest}>
            {prependIcon && <StyledIcon>{prependIcon}</StyledIcon>}
            {children}
        </StyledButton>
    );
};
