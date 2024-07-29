import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../../../components/FlexWrapper";
import {CardButton} from "../../../../../components/Button";
import {ProjectType} from "../Cards";

type CardPropsType = {
    project: ProjectType
}

export const Card = (props: CardPropsType) => {
    return (
        <StyledCard src={props.project.src}>
            <FlexWrapper direction="column" justify={"flex-end"}>
                <CardContent>
                    <Text>{props.project.title}</Text>
                    <ButtonsWrapper>
                            <CardButton>Edit for you</CardButton>
                            <Link>see preview</Link>
                    </ButtonsWrapper>
                </CardContent>
            </FlexWrapper>

        </StyledCard>
    );
};

const CardContent = styled.div`
    background-color: white;
    color: black;
    box-shadow: 0 4px 4px rgba(0, 0, 0, .25);
    border-radius: 0 0 26px 26px;
    padding: 17px 33px 25px;
    
    @media screen and (max-width: 650px){
        padding: 10px 20px 14px;
        border-radius: 0 0 16px 16px;
    }

`

const Text = styled.p`
    font-weight: 700;
    font-size: 20px;
    line-height: 150%;
    color: #2157f2;
    margin-bottom: 25px;

    @media screen and (max-width: 650px){
        font-size: 12px;
        margin-bottom: 16px;
    }    
`

const Link = styled.a`
    color: #2157F2;
    font-size: 14px;
    line-height: 148%;
    cursor: pointer;

    @media screen and (max-width: 650px){
        font-size: 8px;
    }
`

const StyledCard = styled.div<{ src: string }>`
    width: 270px;
    height: 394px;
    color: black;
    border: none;
    border-radius: 26px;
    background-image: url(${props => props.src});
    background-position: center;
    background-size: cover;

    @media screen and (max-width: 650px){
        width: 165px;
        height: 240px;
        border-radius: 16px;
    }
    
    &:hover ${CardContent} {
        background-color: #a6bcfa;
        & ${Text} {
            color: white;
        }
        
        & ${Link} {
            color: white;
        }
        
        & ${CardButton} {
            color: #a6bcfa;
        }
    }
`

const ButtonsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`