import React from 'react';
import styled from "styled-components";
import man from './../../../assets/images/man.webp'
import map from "./../../../assets/images/map.webp"
import {FlexWrapper} from "../../../components/FlexWrapper";
import {LinkIcon} from "../../../components/Icon/Icon";
import circle from "./../../../assets/images/sectiontitlecircle.svg"
import circleSmall from "./../../../assets/images/sectiontitlecirclesmall.svg"
import {font} from "../../../styles/Common";

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
                    <Name>I’m <span>Alireza</span><br /> <span>Kavousy nezjad</span></Name>
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

    @media ${({theme}) => theme.media.tablet} {
        background-position: right 0 bottom 0, left 3vw bottom 8vh;
        background-size: 60% auto, 55% auto;
        padding: 70px 10px;
    }

    @media ${({theme}) => theme.media.mobile} {
        height: 668px;
        padding-top: 48px;
    }
    
    position: relative;
`

const Info = styled.div`
    position: absolute;
    left: 115px;
    bottom: 40px;
    max-width: 563px;
    //height: 491px;
    padding: 30px 24px 65px 59px;
    border-radius: 100px 0;
    border: 2px solid rgba(255, 255, 255, 0.5);
    background: linear-gradient(132deg, rgba(255, 255, 255, 0.5) 0%, rgba(0, 71, 255, 0.05) 100%);
    backdrop-filter: blur(10px);

    @media ${({theme}) => theme.media.tablet} {
        position: static;
        margin: 0 auto;
    }

    @media ${({theme}) => theme.media.mobile} {
        padding: 40px 18px 35px 28px;
        border-radius: 54px 0;
        border: 1px solid #FFF;
        max-width: 400px;
    }

    @media screen and (max-width: 450px){
        max-width: 300px;
    }
`

const IconList = styled.ul`
    display: flex;
    column-gap: 16px;
    align-self: flex-end;

    @media ${({theme}) => theme.media.mobile} {
        display: none;
    }
`

const Name = styled.span`
    margin: 18px 0 22px;
    
    & > span:first-child {
        color: #2157F2;
    }

    & > span:last-child {
        white-space: nowrap;
    }

    font-weight: 700;
    font-size: 60px;
    line-height: 136%;
    color: #393939;
    
    @media ${({theme}) => theme.media.tablet} {
        ${font({ weight: 700, Fmax: 60, Fmin: 28})};
    }
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
            margin-top: 5px;
        }

        @media ${({theme}) => theme.media.tablet} {
            ${font({ Fmax: 20, Fmin: 10})};
        }

        @media ${({theme}) => theme.media.mobile} {
            list-style-image: url(${circleSmall});
            padding-left: 7px;

            & + li {
                margin-top: 3px;
            }
        }
    }
`