import React from 'react';
import styled from "styled-components";
import man from './../../../assets/images/man.webp'
import map from "./../../../assets/images/map.webp"
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon, LinkIcon} from "../../../components/Icon/Icon";
import circle from "./../../../assets/images/sectiontitlecircle.svg"

const infoData =
    [
        "I was born in Iran-Mashhad",
        "I’m 20 years old",
        "I have started my interest in this field from 2019",
        "I’m designer , video editor , web developer and ...",
        "My phone number in Iran +989212073348"
    ]

export const Location = () => {
    return (
        <StyledLocation>
            <Info>
                <FlexWrapper direction={"column"}>
                    <IconList>
                        <LinkIcon href="#"
                                  iconId={"whatsapp"}
                                  width={"26"}
                                  height={"26"}
                                  viewBox={"0 0 26 26"}/>
                        <LinkIcon href="#"
                                  iconId={"instagram"}
                                  width={"26"}
                                  height={"26"}
                                  viewBox={"0 0 26 26"}/>
                        <LinkIcon href="#"
                                  iconId={"goTop"}
                                  width={"26"}
                                  height={"26"}
                                  viewBox={"0 0 26 26"}/>
                    </IconList>
                    <Name>I’m Alireza Kavousy nezjad</Name>
                    <InfoList>
                        {infoData.map((item, i) => (<li key={i}>{item}</li>))}
                    </InfoList>
                </FlexWrapper>
            </Info>
        </StyledLocation>
    );
};

const StyledLocation = styled.section`
    width: 100%;
    height: 100vh;

    background-color: #A6BCFA;
    background-image: url(${man}), url(${map});
    background-position: right -205px bottom 0, left 42px top 68px;
    background-repeat: no-repeat;

    position: relative;
`

const Info = styled.div`
    position: absolute;
    left: 115px;
    bottom: 40px;
    width: 563px;
    height: 491px;
    padding: 30px 24px 65px 59px;
    border-radius: 100px 0;
    border: 2px solid rgba(255, 255, 255, 0.5);
    background: linear-gradient(132deg, rgba(255, 255, 255, 0.5) 0%, rgba(0, 71, 255, 0.05) 100%);
    backdrop-filter: blur(10px);
`

const IconList = styled.ul`
    display: flex;
    column-gap: 16px;
    align-self: flex-end;
`

const Name = styled.span`
    margin: 18px 0 22px;
    font-weight: 700;
    font-size: 60px;
    line-height: 136%;
    color: #393939;
`

const InfoList = styled.ul`
    display: flex;
    column-gap: 16px;
    flex-direction: column;
    list-style-image: url(${circle});
    margin-left: 24px;

    li {
        padding-left: 12px;
        color: #393939;
        font-size: 20px;
        line-height: 136%;

        & + li {
            margin-top: 6px;
        }
    }
`