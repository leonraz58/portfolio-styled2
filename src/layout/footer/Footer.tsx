import React from 'react';
import styled from "styled-components";
import bgfooter from './../../assets/images/footer.svg'

export const Footer = () => {
    return (
        <StyledFooter>
            <Wave></Wave>
            <Content>
                <Text1>Coded by Alireza Kavousy nezhad</Text1>
                <Text2>All Rights Reserved 2022</Text2>
            </Content>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    
`

const Wave = styled.div`
    background-image: url(${bgfooter});
    background-repeat: repeat;
    background-position: top 0 left 0;
    min-height: 125px;
    width: 100%;
`

const Content = styled.div`
    background-color: #A5BBF8;
    padding-bottom: 75px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Text1 = styled.span`
    font-weight: 700;
    font-size: 16px;
    color: #fff;
`

const Text2 = styled.span`
    font-weight: 400;
    font-size: 11px;
    color: #fff;
`
