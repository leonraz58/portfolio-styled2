import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Skill} from "./skill/Skill";
import {Container} from "../../../components/Container";



export const Skills = () => {

    const [width, setWidth] = useState(window.innerWidth);
    const tablet = 768;
    const mobile = 576;

    const handleWindowResize = () => setWidth(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize );

        return () => {
            window.removeEventListener('resize', handleWindowResize)
        }
    }, []);

    const calcSize = () => {
        return width > mobile ? (width > tablet ? '70px' : '108px') : '60px';
    }

    return (
        <StyledSkills>
            <Container>
                <SkillsWrapper>
                    <Skill iconId={"ps"} width={calcSize()}
                           height={calcSize()}
                           viewBox={"3 3 38 38"}
                           label={"Photoshop"}/>
                    <Skill iconId={"ae"} width={calcSize()} height={calcSize()} viewBox={"3 3 38 38"} label={"After Effects"}/>
                    <Skill iconId={"illustrator"} width={calcSize()} height={calcSize()} viewBox={"3 3 38 38"}
                           label={"Illustrator"}/>
                    <Skill iconId={"figma"} width={calcSize()} height={calcSize()} viewBox={"-4 -3 54 54"} label={"Figma"}/>
                </SkillsWrapper>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    width: 100%;
    background-image: linear-gradient(to right, #A6BCFA 30%, #FFFFFF 30%);
    padding-bottom: 90px;
    background-color: white;

    @media ${({theme}) => theme.media.tablet} {
        background-image: none;
        padding-top: 65px;
    }
    
`

const SkillsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 161px);
    gap: 12px;
    justify-content: center;
    justify-items: center;

    @media ${({theme}) => theme.media.tablet} {
        grid-template-columns: repeat(2, minmax(150px, 271px));
        row-gap: 75px;
        column-gap: 22px;
    }

    @media ${({theme}) => theme.media.mobile} {
    //@media screen and (max-width: 480px) {
        row-gap: 40px;
        column-gap: 12px;
    }
`

