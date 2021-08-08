import React from "react";
import styled from "styled-components";

const StyledTextArea = styled.textarea`
    background: none;
    border: 0;
    font-size: 16px;
    font-family: "Lato", sans-serif;
    outline: none;
    padding: 0;
    resize: none;
`;

export const TextArea = ({
    ...rest
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => (
    <StyledTextArea {...rest} />
);
