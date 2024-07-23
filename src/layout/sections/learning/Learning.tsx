import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Learning = () => {
    return (
        <StyledLearning>
                <SectionTitle>Learning</SectionTitle>
                <Slides>
                    <Title>After Effects & Photoshop</Title>
                    <FlexWrapper gap={"12px"}>
                        <Slide></Slide>
                        <Slide></Slide>
                        <Slide></Slide>
                        <Slide></Slide>
                        <Slide></Slide>
                    </FlexWrapper>
                </Slides>
            <Slides>
                <Title>After Effects & Photoshop</Title>
                <FlexWrapper gap={"12px"}>
                    <Slide></Slide>
                    <Slide></Slide>
                    <Slide></Slide>
                    <Slide></Slide>
                    <Slide></Slide>
                </FlexWrapper>
            </Slides>
        </StyledLearning>
    );
};

const Slides = styled.div`
`

const StyledLearning = styled.section`
    background-color: #a5bbf8;
    padding: 62px 0 96px 75px;

    ${SectionTitle} {
        color: white;
        margin-bottom: 70px;
    }
    
    ${Slides} + ${Slides} {
        margin-top: 21px;
    } 
`

const Slide = styled.div`
    box-shadow: 5px 6px 10px 0 rgba(0, 0, 0, 0.1);
    background: #d9d9d9;
    border-radius: 9px;
    width: 330px;
    height: 192px;
`

const Title = styled.h3`
    font-weight: 500;
    font-size: 20px;
    line-height: 136%;
    color: #fff
`