import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { Button, ButtonColorEnum } from "../Button/Button";
import { Flex } from "../Flex/Flex";
import { TextArea } from "../TextArea/TextArea";
import { EmojiHappyIcon, PaperClipIcon } from "@heroicons/react/outline";

type ChatFooterProps = {
    sendMessage: (msg: string) => void;
    messageSending: boolean;
} & React.ComponentPropsWithoutRef<"div">;

const StyledChatFooter = styled.div`
    background: #fff;
    display: flex;
    flex-direction: row;
    flex-shrink: 0;
    justify-content: space-between;
    overflow: hidden;
    padding: 16px 24px;
`;

const StyledTextArea = styled(TextArea)`
    margin-right: 16px;
    width: 100%;
`;

export const ChatFooter = ({
    sendMessage,
    messageSending,
    ...rest
}: ChatFooterProps) => {
    const [message, setMessage] = useState<string>();

    const onMessageChangeHandler = useCallback(
        (e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setMessage(e.target.value),
        []
    );

    const submitMessage = useCallback(
        (e) => {
            if (e.key === "Enter") {
                message && sendMessage(message);
            }
        },
        [message, sendMessage]
    );

    useEffect(() => {
        !messageSending && setMessage("");
    }, [messageSending]);

    return (
        <StyledChatFooter {...rest}>
            <Flex justify-content="space-between">
                <StyledTextArea
                    placeholder="Message"
                    onChange={onMessageChangeHandler}
                    value={message}
                    onKeyPress={submitMessage}
                />
            </Flex>
            <Flex alignItems="center" justifyContent="flex-end">
                <Button
                    color={ButtonColorEnum.WHITE}
                    prependIcon={<EmojiHappyIcon />}
                />
                <Button
                    color={ButtonColorEnum.WHITE}
                    prependIcon={<PaperClipIcon />}
                />
            </Flex>
        </StyledChatFooter>
    );
};
