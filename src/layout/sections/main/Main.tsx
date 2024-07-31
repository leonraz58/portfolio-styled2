import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/images/main/photo.webp'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Button} from "../../../components/Button";
import {Icon} from "../../../components/Icon/Icon";
import {StyledLink} from "../../../components/Link.styled";
import {Container} from "../../../components/Container";
import cross from "../../../assets/images/main/cross.svg"
import crossSmall from "../../../assets/images/main/crossSmall.svg"
import circle from '../../../assets/images/main/ellipse.svg'
import circleSmall from '../../../assets/images/main/ellipseSmall.svg'
import {font} from "../../../styles/Common";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <MainCardWrapper>
                    <Cross/>
                    <Circle/>
                    <StyledMainCard>
                        <PhotoWrapper>
                            <Photo src={photo} alt=""/>
                        </PhotoWrapper>
                        <FlexWrapper direction={"column"}>
                            <Name>I’m <span>Alireza</span><br /> <span>Kavousy nezjad</span></Name>
                            <Text>Draft is a revolutionary mobile app built to help you manage your business easily and
                                save your money.</Text>
                            <FlexWrapper align={"center"}>
                                <Button as="a" href={"#"}>
                                    See projects
                                    <Icon iconId={"arrow"}
                                          width={"28"}
                                          height={"28"}
                                          viewBox={"0 -4 28 28"}
                                          fill={"#FFFFFF"}/>
                                </Button>
                                <StyledLink href="#">Download Resume</StyledLink>
                            </FlexWrapper>
                        </FlexWrapper>
                    </StyledMainCard>
                </MainCardWrapper>
            </Container>
        </StyledMain>
    );
};



const Circle = styled.div`
    position: absolute;
    width: 152px;
    height: 152px;
    background-image: url(${circle});
    background-size: cover;
    bottom: -10px;
    right: 50px;
    @media ${({theme}) => theme.media.mobile} {
        bottom: -50px;
        right: 0;
        background-image: url(${circleSmall});
    }
    
`

const Cross = styled.div`
    position: absolute;
    width: 105px;
    height: 105px;
    background-image: url(${cross});
    background-size: cover;
    top: -75px;
    left: 374px;
    @media ${({theme}) => theme.media.tablet} {
        top: -60px;
        right: 50px;
        left: unset;
    }
    @media ${({theme}) => theme.media.mobile} {
        background-image: url(${crossSmall});
        top: -45px;
        right: 50px;
        left: unset;
    }
    
`

const StyledMain = styled.section`
    background-image: linear-gradient(to right, #A6BCFA 30%, #FFFFFF 30%);
    background-repeat: no-repeat;
    background-position: 0 0;
    padding-top: 189px;
    padding-bottom: 50px;
    
    @media ${({theme}) => theme.media.tablet} {
        background-position: top 70px left 0;
        background-image: linear-gradient(to right, #A6BCFA 50%, #FFFFFF 50%);
        padding-top: 123px;
    }

    @media ${({theme}) => theme.media.mobile} {
        background-position: top 37px left 0;
        padding-top: 96px;
    }
`

const MainCardWrapper = styled.div`
    position: relative;

    // &::before {
    //     content: "";
    //     display: inline-block;
    //     height: 100px;
    //     width: 100px;
    //     position: absolute;
    //     top: -70px;
    //     left: 375px;
    //     z-index: -1;
        //     background-image: url(${cross});
    //     background-repeat: no-repeat;
    // }
`

const StyledMainCard = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    //gap: 60px;
    max-width: 1158px;
    width: 100%;
    margin: 0 auto;
    padding: 20px 100px 65px;
    border-radius: 200px 0;
    border: 2px solid rgba(255, 255, 255, 0.5);
    background: linear-gradient(147deg, rgba(255, 255, 255, 0.5) 0%, rgba(0, 71, 255, 0.05) 100%);
    backdrop-filter: blur(10px);

    ${Button} {
        padding: 15px 35px;
        display: flex;
        align-items: center;
        gap: 20px;
        font-weight: 600;
        margin-right: 30px;

        @media ${({theme}) => theme.media.tablet} {
            ${font({Fmax: 15, Fmin: 8, weight: 600})};
            margin-right: 25px;
        }
        @media ${({theme}) => theme.media.mobile} {
            padding: 8px 20px;
            gap: 8px;
            margin-right: 18px;
        }
    }

    @media screen and (max-width: 1024px){
        padding-right: 10px;
        padding-left: 10px;
    }
    
    ${StyledLink} {
        @media ${({theme}) => theme.media.tablet} {
            ${font({Fmax: 15, Fmin: 8})};
        }
    }
    
    

    @media ${({theme}) => theme.media.tablet} {
        flex-direction: column;
        justify-items: center;
        align-items: center;
        max-width: 590px;
        background: linear-gradient(132deg, rgba(255, 255, 255, 0.5) 0%, rgba(0, 71, 255, 0.05) 100%);
        padding: 30px 60px 85px;
    }

    @media ${({theme}) => theme.media.mobile} {
        border-radius: 112px 0;
        padding-bottom: 48px;
        padding-left: 40px;
    }

`

const PhotoWrapper = styled.div`
    max-width: 400px;
    margin-right: 10px;
    @media ${({theme}) => theme.media.tablet} {
        margin-right: 0;
    }
`

const Photo = styled.img`
    width: 100%;
    height: 100%;
    transform: rotate(-3deg);
    filter: brightness(140%);
    border: 25px solid #FFF;
    border-radius: 50%;
`

const Name = styled.span`
    
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
    margin-bottom: 20px;

    @media screen and (max-width: 1024px){
        font-size: 40px;
    }
    
    @media ${({theme}) => theme.media.tablet} {
        ${font({ weight: 700, Fmax: 60, Fmin: 28})};
    }
`

const Text = styled.p`
    font-size: 20px;
    margin-bottom: 42px;
    max-width: 400px;

    @media ${({theme}) => theme.media.tablet} {
        ${font({Fmax: 20, Fmin: 11})};
    }
`