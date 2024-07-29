import React from 'react';
import styled from "styled-components";
import {Card} from "./card/Card";
import {TabsStatusType} from "../tabMenu/tabMenu";

export type ProjectType = {
    id: number,
    src: string,
    title: string,
    type: TabsStatusType
}

type CardsPropsType = {
    projects: Array<ProjectType>
}

export const Cards = (props: CardsPropsType) => {
    return (
        <StyledCards>
            {props.projects.map((project) => (<Card project={project} key={project.id}/>))}
        </StyledCards>
    );
};

const StyledCards = styled.ul`
    display: flex;
    column-gap: 38px;
    row-gap: 48px;
    margin-top: 60px;
    flex-wrap: wrap;
    justify-content: center;

    @media screen and (max-width: 650px){
        column-gap: 23px;
        row-gap: 29px;
        margin-top: 37px;
    }
`

