import React, {useState} from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {TabMenu, TabsStatusType} from "./tabMenu/tabMenu";
import {Cards} from "./cards/Cards";
import {projectsData} from "./projectsData";

export const Projects = () => {

    const [statusFilter, setStatusFilter] = useState<TabsStatusType>("story")

    const tabsData: Array<{ title: string, status: TabsStatusType }> = [
        {title: "Story", status: "story"},
        {title: "Post", status: "post"},
        {title: "Banner", status: "banner"},
        {title: "Trailer", status: "trailer"},
        {title: "Design", status: "design"},
        {title: "More", status: "more"},
    ]

    let filteredProjects = projectsData

    switch(statusFilter){
        case "post":
            filteredProjects = filteredProjects.filter(project => project.type === "post");
            break;

        case "banner":
            filteredProjects = filteredProjects.filter(project => project.type === "banner");
            break;

        case "trailer":
            filteredProjects = filteredProjects.filter(project => project.type === "trailer");
            break;

        case "design":
            filteredProjects = filteredProjects.filter(project => project.type === "design");
            break;

        case "more":
            filteredProjects = filteredProjects.filter(project => project.type === "more");
            break;

        default:
            filteredProjects = filteredProjects.filter(project => project.type === "story");
    }

    return (
        <StyledProject>
        <Container>
            <FlexWrapper direction={"column"} justify={"center"} align={"center"}>
                <SectionTitle>Projects</SectionTitle>
                <TabMenu tabsData={tabsData} changeFilterStatus={setStatusFilter} currentFilterStatus={statusFilter}/>
                <Cards projects={filteredProjects}/>
            </FlexWrapper>
        </Container>
        </StyledProject>
    );
};

const StyledProject = styled.section`
    margin-top: 60px;
    margin-bottom: 154px;
`