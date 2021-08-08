import React from "react";
import { Button } from "./components/Button/Button";
import { Chat } from "./components/Chat/Chat";
import { ChatHeader } from "./components/ChatHeader/ChatHeader";
import { User } from "./components/molecules/User/User";
import { StatusTypeEnum } from "./components/Status/Status";
import { XIcon, VolumeUpIcon } from "@heroicons/react/outline";
import { Flex } from "./components/Flex/Flex";
import { ChatFooter } from "./components/ChatFooter/ChatFooter";
import { ChatContent } from "./components/ChatContent/ChatContent";
import { Message, MessageTypeEnum } from "./components/Message/Message";

export const App = () => {
    const userLanguages = [
        {
            country: "GB",
        },
        {
            country: "EE",
        },
    ];

    return (
        <Flex alignItems="center" justifyContent="center">
            <Chat>
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
                    <Flex direction="column-reverse">
                        <Message type={MessageTypeEnum.USER}>
                            Hello HelloHello HelloHello HelloHello HelloHello
                            HelloHello Hello
                        </Message>
                        <Message type={MessageTypeEnum.USER}>
                            Hello HelloHello HelloHello HelloHello HelloHello
                            HelloHello Hello
                        </Message>
                        <Message type={MessageTypeEnum.MODERATOR}>
                            Hello HelloHello HelloHello HelloHello HelloHello
                            HelloHello Hello
                        </Message>
                        <Message type={MessageTypeEnum.USER}>
                            Hello HelloHello HelloHello HelloHello HelloHello
                            HelloHello Hello
                        </Message>
                        <Message type={MessageTypeEnum.MODERATOR}>
                            Hello HelloHello HelloHello HelloHello HelloHello
                            HelloHello Hello
                        </Message>
                        <Message type={MessageTypeEnum.USER}>
                            Hello HelloHello HelloHello HelloHello HelloHello
                            HelloHello Hello
                        </Message>
                        <Message type={MessageTypeEnum.MODERATOR}>
                            Hello HelloHello HelloHello HelloHello HelloHello
                            HelloHello Hello
                        </Message>
                        <Message type={MessageTypeEnum.USER}>
                            Hello HelloHello HelloHello HelloHello HelloHello
                            HelloHello Hello
                        </Message>
                        <Message type={MessageTypeEnum.MODERATOR}>
                            Hello HelloHello HelloHello HelloHello HelloHello
                            HelloHello Hello
                        </Message>
                        <Message type={MessageTypeEnum.USER}>
                            Hello HelloHello HelloHello HelloHello HelloHello
                            HelloHello Hello
                        </Message>
                        <Message type={MessageTypeEnum.MODERATOR}>
                            Hello HelloHello HelloHello HelloHello HelloHello
                            HelloHello Hello
                        </Message>
                        <Message type={MessageTypeEnum.USER}>
                            Hello HelloHello HelloHello HelloHello HelloHello
                            HelloHello Hello
                        </Message>
                        <Message type={MessageTypeEnum.MODERATOR}>
                            Hello HelloHello HelloHello HelloHello HelloHello
                            HelloHello Hello
                        </Message>
                        <Message type={MessageTypeEnum.USER}>
                            Hello HelloHello HelloHello HelloHello HelloHello
                            HelloHello Hello
                        </Message>
                        <Message type={MessageTypeEnum.MODERATOR}>
                            Hello HelloHello HelloHello HelloHello HelloHello
                            HelloHello Hello
                        </Message>
                        <Message type={MessageTypeEnum.MODERATOR}>
                            Hello HelloHello HelloHello HelloHello HelloHello
                            HelloHello Hello
                        </Message>
                    </Flex>
                </ChatContent>
                <ChatFooter />
            </Chat>
        </Flex>
    );
};

export default App;
