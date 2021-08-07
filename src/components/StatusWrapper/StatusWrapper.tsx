import React from "react";
import styled from "styled-components";
import { Status, StatusPositionEnum, StatusTypeEnum } from "../Status/Status";

const StyledStatusWrapper = styled.div`
    position: relative;
`;

type StatusWrapperProps = {
    position?: StatusPositionEnum;
    statusType: StatusTypeEnum;
} & React.ComponentPropsWithoutRef<"div">;

export const StatusWrapper = ({
    position = StatusPositionEnum.BOTTOM,
    children,
    statusType,
    ...rest
}: StatusWrapperProps) => (
    <StyledStatusWrapper {...rest}>
        {children}
        <Status type={statusType} position={position} />
    </StyledStatusWrapper>
);
