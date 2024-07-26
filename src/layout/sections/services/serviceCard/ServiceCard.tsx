import React from 'react';
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {Icon} from "../../../../components/Icon/Icon";
import styled from "styled-components";

type ServiceCardPropsType = {
    text: string,
    iconId: string
}

export const ServiceCard = (props: ServiceCardPropsType) => {
    return (
        <StyledServiceCard>
            <FlexWrapper direction={"column"} justify={"flex-end"}>
                <Icon
                    iconId={props.iconId}
                    width={"73"}
                    height={"73"}
                    viewBox={'0 0 73 73'}
                />
                <Text>{props.text}</Text>

                <Link><FlexWrapper align={"center"} gap={"15px"}>View More
                    <Icon
                        iconId={"arrow"}
                        width={"21"}
                        height={"21"}
                        viewBox={"0 0 21 21"}
                        fill={"#2157F2"}
                    />
                </FlexWrapper>
                </Link>

            </FlexWrapper>
        </StyledServiceCard>
    );
};

const StyledServiceCard = styled.div`
    width: 334px;
    height: 402px;
    color: black;
    box-shadow: 0 15px 29px 0 rgba(0, 0, 0, 0.05);
    background: #fff;
    padding: 0 59px 45px;
`

const Link = styled.a`
    font-weight: 400;
    font-size: 16px;
    line-height: 196%;
    color: #2157f2;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 15px;
    
    ${FlexWrapper} {
        position: relative;
        
        &:hover {
            &::before {
                width: 100%;
            }    
        }
        &::before {
            content: "";
            display: inline-block;

            position: absolute;
            bottom: 5px;
            left: 0;
            right: 0;
            background-color: #2157f2;
            width: 0;
            height: 2px;
            transition: .2s ease-in-out;
        }
    }
`

const Text = styled.span`
    max-width: 150px;
    color: black;
    font-size: 32px;
    font-weight: 600;
    line-height: 125%;
    margin: 25px 0 30px;
`