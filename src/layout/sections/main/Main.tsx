import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/images/photo.webp'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Button} from "../../../components/Button";
import {Icon} from "../../../components/Icon/Icon";
import {StyledLink} from "../../../components/Link.styled";

export const Main = () => {
    return (
        <StyledMain>
            <StyledMainCard>
                <Photo src={photo} alt=""/>
                <FlexWrapper direction={"column"}>
                    <Name>I’m Alireza Kavousy nezjad</Name>
                    <Text>Draft is a revolutionary mobile app built to help you manage your business easily and save your money.</Text>
                    <FlexWrapper gap={"30px"} align={"center"}>
                        <Button as="a" href={"#"}>
                            See projects
                            <Icon iconId={"arrow"}
                                  width={"28"}
                                  height={"28"}
                                  viewBox={"0 -4 28 28"}
                                  fill={"#FFFFFF"} />
                        </Button>
                        <StyledLink href="#">Download Resume</StyledLink>
                    </FlexWrapper>
                </FlexWrapper>
            </StyledMainCard>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    background-image: linear-gradient(to right, #A6BCFA 30%, #FFFFFF 30%);
    background-repeat: no-repeat;
    background-position: 0 0;
    padding-top: 170px;
    
`

const StyledMainCard = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 60px;
    width: 1158px;
    margin: 0 auto 50px;
    padding: 20px 100px 65px;
    border-radius: 200px 0;
    border: 2px solid rgba(255,255,255,0.5);
    background: linear-gradient(132deg, rgba(255, 255, 255, 0.5) 0%, rgba(0, 71, 255, 0.05) 100%);
    backdrop-filter: blur(20px);

    ${Button} {
        padding: 15px 35px;
        display: flex;
        align-items: center;
        gap: 20px;
    }
`

const Photo = styled.img`
    max-width: 400px;
    border: 25px solid #FFF;
    border-radius: 50%;
`

const Name = styled.span`
    font-size: 60px;
    margin-bottom: 20px;
`

const Text = styled.p`
    font-size: 20px;
    margin-bottom: 42px;
`