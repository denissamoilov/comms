import React from "react";
import styled from "styled-components";

type DirectionType = "column" | "column-reverse" | "row";
type AlignItemsType = "flex-start" | "center" | "flex-end";
type JustifyContentType =
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-between";

const StyledFlex = styled.div.attrs(
    (props: {
        alignItems: AlignItemsType;
        justifyContent: JustifyContentType;
        direction: DirectionType;
    }) => props
)`
    align-items: ${(props) => props.alignItems};
    display: flex;
    justify-content: ${(props) => props.justifyContent};
    flex-direction: ${(props) => props.direction};
`;

type FlexProps = {
    alignItems?: AlignItemsType;
    justifyContent?: JustifyContentType;
    direction?: DirectionType;
} & React.ComponentPropsWithRef<"div">;

export const Flex = ({
    children,
    alignItems,
    justifyContent,
    direction = "row",
    ...rest
}: FlexProps) => (
    <StyledFlex
        alignItems={alignItems}
        justifyContent={justifyContent}
        direction={direction}
        {...rest}
    >
        {children}
    </StyledFlex>
);
