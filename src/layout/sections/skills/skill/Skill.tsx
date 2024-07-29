import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../../components/Icon/Icon";

type SkillPropsType = {
    iconId: string
    width: string
    height: string
    viewBox: string
    label: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <IconWrapper>
                <Icon iconId={props.iconId} width={props.width} height={props.height} viewBox={props.viewBox} />
            </IconWrapper>
            <Label>{props.label}</Label>
        </StyledSkill>
    );
};

const StyledSkill = styled.div `
    width: 161px;
    height: 91px;
    border-radius: 24px;
    background-color: #A6BCFA;
    text-align: center;
    box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.15);

    @media ${({theme}) => theme.media.tablet} {
        max-width: 271px;
        width: 100%;
        height: 153px;
        border-radius: 40px;
        font-size: 33px;
    }

    @media ${({theme}) => theme.media.mobile} {
        max-width: 150px;
        width: 100%;
        height: 82px;
        border-radius: 22px;
        font-size: 18px;
    }
`

const IconWrapper = styled.div`
    width: 70px;
    height: 70px;
    margin: -30px auto 10px;        
    border-radius: 50%;
    border: 10px solid white;
    overflow: hidden;
    background-color: #000B1D;

    @media ${({theme}) => theme.media.tablet} {
        width: 108px;
        height: 108px;
        border: 16px solid white
    }

    @media ${({theme}) => theme.media.mobile} {
        width: 60px;
        height: 60px;
        border: 10px solid white
    }
`

const Label = styled.span`
    color: white;
`