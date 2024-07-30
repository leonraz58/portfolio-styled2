import React, {useEffect, useState} from 'react';
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {Icon} from "../../../../components/Icon/Icon";
import styled from "styled-components";

type ServiceCardPropsType = {
    text: string,
    iconId: string
}

export const ServiceCard = (props: ServiceCardPropsType) => {

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
        return width > mobile ? (width > tablet ? '73px' : '62px') : '35px';
    }

    return (
        <StyledServiceCard>
            <FlexWrapper direction={"column"} justify={"flex-end"}>
                <Icon
                    iconId={props.iconId}
                    width={calcSize()}
                    height={calcSize()}
                    viewBox={'0 0 73 73'}
                />
                <Text>{props.text}</Text>

                <Link>
                    <FlexWrapper align={"center"} gap={"15px"}>
                        <span>View More</span>
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
    max-width: 334px;
    width: 100%;
    height: 402px;
    color: black;
    box-shadow: 0 15px 29px 0 rgba(0, 0, 0, 0.05);
    background: #fff;
    padding: 0 59px 45px;

    @media ${({theme}) => theme.media.tablet }{
        max-width: 280px;
        height: 338px;
        padding: 90px 10px 38px 50px;
    }

    @media ${({theme}) => theme.media.mobile }{
        max-width: 155px;
        height: 187px;
        padding: 55px 10px 20px 27px;
    }
`

const Link = styled.a`
    font-weight: 400;
    font-size: 16px;
    line-height: 196%;
    color: #2157f2;

    & span {
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
    
    ${FlexWrapper} {
        
        
        @media ${({theme}) => theme.media.tablet }{
            gap: 11px;
        }
        @media ${({theme}) => theme.media.mobile }{
            gap: 5px;
        }
    }

    @media ${({theme}) => theme.media.tablet }{
        font-size: 13px;
    }
    @media ${({theme}) => theme.media.mobile }{
        font-size: 7px;
    }
    
`

const Text = styled.span`
    max-width: 150px;
    color: black;
    font-size: 32px;
    font-weight: 600;
    line-height: 125%;
    margin: 25px 0 30px;

    @media ${({theme}) => theme.media.tablet }{
        font-size: 27px;
        margin: 18px 0 16px;
    }

    @media ${({theme}) => theme.media.mobile }{
        //max-width: 70px;
        font-size: 15px;
        margin: 8px 0 2px;
    }
`