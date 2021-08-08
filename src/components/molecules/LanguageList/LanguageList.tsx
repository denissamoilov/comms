import React from "react";

import Flag from "react-flagkit";
import styled from "styled-components";

export type LanguageItemType = {
    country: string;
};

type LanguageListProps = {
    languages: LanguageItemType[];
} & React.ComponentPropsWithoutRef<"div">;

const StyledFlag = styled(Flag)`
    border-radius: 50%;
    overflow: hidden;
    position: relative;
`;

const StyledLanguageList = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    margin-top: 4px;

    ${StyledFlag}:not(:first-child) {
        transform: translateX(-30%);
    }
`;

export const LanguageList = ({ languages, ...rest }: LanguageListProps) => (
    <StyledLanguageList>
        {languages.map((lang, index) => (
            <StyledFlag
                key={`${lang.country}-${index}`}
                country={lang.country}
                size={16}
            />
        ))}
    </StyledLanguageList>
);
