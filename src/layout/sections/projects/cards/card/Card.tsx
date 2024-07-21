import React from 'react';
import styled from "styled-components";
import image from "./../../../../../assets/images/projects/project-1.webp"
import image2 from "./../../../../../assets/images/projects/project1.jpg"
import {FlexWrapper} from "../../../../../components/FlexWrapper";
import {CardButton} from "../../../../../components/Button";

export const Card = () => {
    return (
        <StyledCard>
            {/*<FlexWrapper direction="column" justify={"flex-end"}>*/}
                <CardContent>
                    <Text>Story motion for sale English cources</Text>
                    <FlexWrapper justify="space-between" align={"center"}>

                            <CardButton>Edit for you</CardButton>
                            <Link>see preview</Link>

                    </FlexWrapper>
                </CardContent>
            {/*</FlexWrapper>*/}

        </StyledCard>
    );
};

const StyledCard = styled.div`
    width: 270px;
    height: 394px;
    color: black;
    border: none;
    border-radius: 26px;
    background-image: url(${image2});
    background-position: center;
    background-size: cover;
    
    display: flex;
    justify-content: flex-end;
    flex-direction: column;

`

const CardContent = styled.div`
    background-color: white;
    color: black;
    box-shadow: 0 4px 4px rgba(0, 0, 0, .25);
    border-radius: 0 0 26px 26px;
    padding: 17px 33px 25px;
`

const Text = styled.p`
    font-weight: 700;
    font-size: 20px;
    line-height: 150%;
    color: #2157f2;
    margin-bottom: 25px;

`

const Link = styled.a`
    color: #2157F2;
    font-size: 14px;
    line-height: 148%;
    cursor: pointer;
`