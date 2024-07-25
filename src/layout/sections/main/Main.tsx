import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/images/main/photo.webp'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Button} from "../../../components/Button";
import {Icon} from "../../../components/Icon/Icon";
import {StyledLink} from "../../../components/Link.styled";
import {Container} from "../../../components/Container";
import cross from "../../../assets/images/main/cross.svg"
import circle from '../../../assets/images/main/ellipse.svg'

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <MainCardWrapper>
                    <Cross/>
                    <Circle/>
                    <StyledMainCard>
                        <Photo src={photo} alt=""/>
                        <FlexWrapper direction={"column"}>
                            <Name>I’m <span>Alireza</span> Kavousy nezjad</Name>
                            <Text>Draft is a revolutionary mobile app built to help you manage your business easily and
                                save your money.</Text>
                            <FlexWrapper gap={"30px"} align={"center"}>
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
`

const Cross = styled.div`
    position: absolute;
    width: 105px;
    height: 105px;
    background-image: url(${cross});
    background-size: cover;
    top: -75px;
    left: 374px;
`

const StyledMain = styled.section`
    background-image: linear-gradient(to right, #A6BCFA 30%, #FFFFFF 30%);
    background-repeat: no-repeat;
    background-position: 0 0;
    padding-top: 170px;
    padding-bottom: 50px;
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
    gap: 60px;
    width: 1158px;
    margin: 0 auto;
    padding: 20px 100px 65px;
    border-radius: 200px 0;
    border: 2px solid rgba(255, 255, 255, 0.5);
    background: linear-gradient(132deg, rgba(255, 255, 255, 0.5) 0%, rgba(0, 71, 255, 0.05) 100%);
    backdrop-filter: blur(10px);


    ${Button} {
        padding: 15px 35px;
        display: flex;
        align-items: center;
        gap: 20px;
    }
    
    z-index: 1;
`

const Photo = styled.img`
    max-width: 400px;
    border: 25px solid #FFF;
    border-radius: 50%;
    transform: rotate(-3deg);

    img {
        filter: brightness(1400%)
    }
`

const Name = styled.span`
    span {
        color: blue;
    }

    font-weight: 700;
    font-size: 60px;
    line-height: 136%;
    color: #393939;
    margin-bottom: 20px;
`

const Text = styled.p`
    font-size: 20px;
    margin-bottom: 42px;
`