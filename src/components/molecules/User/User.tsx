import React from "react";
import styled from "styled-components";
import { Avatar, AvatarSizeEnum } from "../../Avatar/Avatar";
import { Flex } from "../../Flex/Flex";
import { StatusTypeEnum } from "../../Status/Status";
import { StatusWrapper } from "../../StatusWrapper/StatusWrapper";
import { LanguageItemType, LanguageList } from "../LanguageList/LanguageList";

type UserProps = {
    userName: string;
    statusType: StatusTypeEnum;
    languages?: LanguageItemType[];
} & React.ComponentPropsWithoutRef<"div">;

const StyledUser = styled.div`
    display: flex;
    flex-direction: row;
`;

const StyledUserTitle = styled.p`
    font-weight: 600;
    font-size: 18px;
    margin: 0;
`;

export const User = ({
    userName,
    statusType,
    languages,
    ...rest
}: UserProps) => (
    <StyledUser>
        <StatusWrapper statusType={statusType}>
            <Avatar
                size={AvatarSizeEnum.MEDIUM}
                src="https://source.unsplash.com/rDEOVtE7vOs/64x64"
            />
        </StatusWrapper>
        <Flex justifyContent="center" direction="column">
            <StyledUserTitle>{userName}</StyledUserTitle>
            {languages && <LanguageList languages={languages} />}
        </Flex>
    </StyledUser>
);
