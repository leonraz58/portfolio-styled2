import React from 'react';
import {LinkIcon, LinkIconPropsType} from "../../../../components/Icon/Icon";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import styled from "styled-components";

type ContactPropsType = {
    text1: string;
    text2: string;
} & LinkIconPropsType

export const Contact = (props:ContactPropsType) => {
    return (
        <FlexWrapper align={"center"} gap={"23px"}>
            <LinkIcon href="#"
                      iconId={props.iconId}
                      width={props.width}
                      height={props.height}
                      viewBox={props.viewBox}
                      fill={props.fill}/>
            <FlexWrapper direction={"column"} justify={"space-between"} align={"start"}>
                <Text1>{props.text1}</Text1>
                <Text2>{props.text2}</Text2>
            </FlexWrapper>
        </FlexWrapper>
    );
};

const Text1 = styled.h4`
    font-weight: 500;
    font-size: 16px;
    line-height: 136%;
    text-align: center;
    color: #000;
`

const Text2 = styled.h5`
    font-weight: 400;
    font-size: 12px;
    line-height: 136%;
    text-align: center;
    color: #8b8b8b;
`