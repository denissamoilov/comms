import React from "react";
import { Button } from "./components/Button/Button";
import { Chat } from "./components/Chat/Chat";
import { ChatHeader } from "./components/ChatHeader/ChatHeader";
import { User } from "./components/molecules/User/User";
import { StatusTypeEnum } from "./components/Status/Status";
import { XIcon, VolumeUpIcon } from "@heroicons/react/outline";
import { Flex } from "./components/Flex/Flex";

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
        <div className="App">
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
                Chat
            </Chat>
        </div>
    );
};

export default App;
