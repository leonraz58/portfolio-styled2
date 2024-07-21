import React from 'react';
import styled from "styled-components";
import {Card} from "./card/Card";

export const Cards = () => {
    return (
        <StyledCards>
            <Card/>
            <Card/>
            <Card/>
        </StyledCards>
    );
};

const StyledCards = styled.ul`
    display: flex;
    gap: 38px;
    margin-top: 60px;
`

