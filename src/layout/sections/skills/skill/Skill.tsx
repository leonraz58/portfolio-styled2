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
`

const IconWrapper = styled.div`
    width: 70px;
    height: 70px;
    margin: -30px auto 10px;        
    border-radius: 50%;
    border: 10px solid white;
    overflow: hidden;
    background-color: #000B1D;
`

const Label = styled.span`
    color: white;
`