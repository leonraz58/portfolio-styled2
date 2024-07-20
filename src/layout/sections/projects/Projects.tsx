import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {TabMenu} from "./tabMenu/tabMenu";

export const Projects = () => {
    const tabsData: Array<string> = [
            "Story",
            "Post",
            "Banner",
            "Trailer",
            "Design",
            "More",
    ]

    return (
        <StyledProject>
        <Container>
            <FlexWrapper direction={"column"} justify={"center"} align={"center"}>
                <SectionTitle>Projects</SectionTitle>
                <TabMenu tabsData={tabsData}/>
            </FlexWrapper>
        </Container>
        </StyledProject>
    );
};

const StyledProject = styled.section`
    padding-top: 60px;
`