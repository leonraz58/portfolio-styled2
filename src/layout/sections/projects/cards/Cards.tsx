import React from 'react';
import styled from "styled-components";
import {Card} from "./card/Card";
import image1 from "../../../../assets/images/projects/project1.webp";
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
            {props.projects.map((project, index) => (<Card project={project} key={project.id}/>))}
        </StyledCards>
    );
};

const StyledCards = styled.ul`
    display: flex;
    gap: 38px;
    margin-top: 60px;
`

