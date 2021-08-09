import { useMutation } from "@apollo/client";
import { VolumeUpIcon, XIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import styled from "styled-components";
import { ADD_MESSAGE_MUTATION } from "../../GraphQL/Mutations";
import { Button } from "../Button/Button";
import { ChatContent } from "../ChatContent/ChatContent";
import { ChatFooter } from "../ChatFooter/ChatFooter";
import { ChatHeader } from "../ChatHeader/ChatHeader";
import { Flex } from "../Flex/Flex";
import { Messages } from "../Messages/Messages";
import { User } from "../molecules/User/User";
import { StatusTypeEnum } from "../Status/Status";

const StyledChat = styled.div`
    background: #fff;
    border-radius: 16px;
    box-shadow: 0 0 24px rgba(0, 0, 0, 0.16);
    display: flex;
    height: 100%;
    flex-direction: column;
    margin: 64px 0;
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
    const [senderName] = useState("Viktor");
    const [messageIsSending, setMessageIsSending] = useState(false);

    const [addMessage] = useMutation(ADD_MESSAGE_MUTATION, {
        onCompleted(data) {
            data.insert_messages_one.body && setMessageIsSending(false);
        },
    });

    const sendMessageHandler = (message: string) => {
        setMessageIsSending(true);
        addMessage({
            variables: {
                body: message,
                senderName: senderName,
            },
        });
    };

    const userLanguages = [
        {
            country: "GB",
        },
        {
            country: "EE",
        },
    ];

    return (
        <StyledChat {...rest}>
            <ChatHeader>
                <User
                    statusType={StatusTypeEnum.ONLINE}
                    userName="Kubota"
                    languages={userLanguages}
                />
                <Flex alignItems="center">
                    <Button prependIcon={<VolumeUpIcon />} />
                    <Button prependIcon={<XIcon />} />
                </Flex>
            </ChatHeader>
            <ChatContent>
                <Messages messageSending={messageIsSending} />
            </ChatContent>
            <ChatFooter
                sendMessage={sendMessageHandler}
                messageSending={messageIsSending}
            />
        </StyledChat>
    );
};
