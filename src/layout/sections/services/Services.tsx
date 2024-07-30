import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {SectionTitle} from "../../../components/SectionTitle";
import {ServiceCard} from "./serviceCard/ServiceCard";

export const Services = () => {
    return (
        <StyledServices>
            <Container>
                <SectionTitle>Services</SectionTitle>
                <Cards>
                    <ServiceCard text={"Video Edit Service"} iconId={"videoPlay"}/>
                    <ServiceCard text={"Ui/Ux \nDesigner"} iconId={"edit"}/>
                    <ServiceCard text={"Website Developer"} iconId={"notebook"}/>
                </Cards>
            </Container>
        </StyledServices>
    );
};

const StyledServices = styled.section`
    padding: 65px 0 97px;
    ${SectionTitle} {
        margin-bottom: 83px;
    }

    @media ${({theme}) => theme.media.mobile }{
        ${SectionTitle} {
            margin-bottom: 50px;
        }
        padding: 50px 0 55px;
    }
`

const Cards = styled.ul`
    display: flex;
    justify-content: center;
    column-gap: 31px;
    row-gap: 80px;
    flex-wrap: wrap;
    

    @media ${({theme}) => theme.media.tablet }{
        column-gap: 25px;
        row-gap: 60px;
    }

    @media ${({theme}) => theme.media.mobile }{
        column-gap: 15px;
        row-gap: 33px;
    }
`

