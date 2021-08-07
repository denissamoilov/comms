import React from "react";
import styled from "styled-components";

export enum AvatarSizeEnum {
    SMALL = "small",
    MEDIUM = "medium",
    LARGE = "large",
}

const StyledAvatar = styled.img.attrs(
    (props: { size: AvatarSizeEnum }) => props
)`
    background: #fff;
    border-radius: 50%;
    display: block;
    height: ${(props) =>
        props.size === AvatarSizeEnum.MEDIUM ? "48px" : "64px"};
    overflow: hidden;
    width: ${(props) =>
        props.size === AvatarSizeEnum.MEDIUM ? "48px" : "64px"};
`;

type AvatarProps = {
    size: AvatarSizeEnum;
} & React.ComponentPropsWithoutRef<"img">;

export const Avatar = ({ size, src, ...rest }: AvatarProps) => {
    return <StyledAvatar size={size} src={src} {...rest} />;
};
