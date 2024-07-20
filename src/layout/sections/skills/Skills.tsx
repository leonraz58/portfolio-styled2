import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Skill} from "./skill/Skill";
import {Container} from "../../../components/Container";

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <FlexWrapper gap={"13px"} justify={"center"} align={"center"}>
                    <Skill iconId={"ps"} width={"70px"} height={"70px"} viewBox={"3 3 38 38"} label={"Photoshop"}/>
                    <Skill iconId={"ae"} width={"70px"} height={"70px"} viewBox={"3 3 38 38"} label={"After Effects"}/>
                    <Skill iconId={"illustrator"} width={"70px"} height={"70px"} viewBox={"3 3 38 38"}
                           label={"Illustrator"}/>
                    <Skill iconId={"figma"} width={"70px"} height={"70px"} viewBox={"-4 -3 54 54"} label={"Figma"}/>
                </FlexWrapper>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    width: 100%;
    background-image: linear-gradient(to right, #A6BCFA 30%, #FFFFFF 30%);
    padding-bottom: 90px;
`

