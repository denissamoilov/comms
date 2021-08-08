import React from "react";
import styled from "styled-components";
import { Button, ButtonColorEnum } from "../Button/Button";
import { Flex } from "../Flex/Flex";
import { TextArea } from "../TextArea/TextArea";
import { EmojiHappyIcon, PaperClipIcon } from "@heroicons/react/outline";

type ChatFooterProps = {} & React.ComponentPropsWithoutRef<"div">;

const StyledChatFooter = styled.div`
    background: #fff;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    overflow: hidden;
    padding: 16px 24px;
`;

const StyledTextArea = styled(TextArea)`
    width: 100%;
`;

export const ChatFooter = ({ ...rest }: ChatFooterProps) => (
    <StyledChatFooter {...rest}>
        <StyledTextArea placeholder="Message" />
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
