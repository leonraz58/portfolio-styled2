import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {ServiceCard} from "./serviceCard/ServiceCard";

export const Services = () => {
    return (
        <StyledServices>
            <Container>
                <SectionTitle>Services</SectionTitle>
                <FlexWrapper justify={"center"} gap={"31px"}>
                    <ServiceCard text={"Video Edit Service"} iconId={"videoPlay"}/>
                    <ServiceCard text={"Ui/Ux Designer"} iconId={"edit"}/>
                    <ServiceCard text={"Website Developer"} iconId={"notebook"}/>
                </FlexWrapper>
            </Container>
        </StyledServices>
    );
};

const StyledServices = styled.section`
    margin: 65px 0 97px;
    ${SectionTitle} {
        margin-bottom: 83px;
    }
`

