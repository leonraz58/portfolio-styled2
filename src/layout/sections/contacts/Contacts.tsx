import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Button} from "../../../components/Button";
import {LinkIcon} from "../../../components/Icon/Icon";
import {Contact} from "./contact/Contact";

export const Contacts = () => {

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
        return width > mobile ? (width > tablet ? '38px' : '72px') : '44px';
    }

    return (
        <StyledContact>
            <Container>
                <SectionTitle>Contact Us</SectionTitle>
                <Box>
                    <FormWrapper>
                        <Title>Get in touch</Title>
                        <StyledForm>
                            <Field type={"email"} placeholder={"e-mail"}/>
                            <Field type={"phone"} placeholder={"phone"}/>
                            <Field as={'textarea'} placeholder={"massage"}/>
                            <Button>Send</Button>
                        </StyledForm>
                    </FormWrapper>
                    <InfoWrapper>
                        <FlexWrapper direction={"column"} gap={"30px"}>
                            <Contact text1={"Location"}
                                     text2={"Mashhad/Iran"}
                                     href="#"
                                     iconId={"location"}
                                     width={calcSize()}
                                     height={calcSize()}
                                     viewBox={"0 0 38 38"}
                                     fill={'#2157F2'}
                            />
                            <Contact text1={"Phone"}
                                     text2={"+989150063913"}
                                     href="#"
                                     iconId={"phone"}
                                     width={calcSize()}
                                     height={calcSize()}
                                     viewBox={"0 0 26 26"}
                            />
                            <Contact text1={"Email"}
                                     text2={"arkn3913@gmail.com"}
                                     href="#"
                                     iconId={"email"}
                                     width={calcSize()}
                                     height={calcSize()}
                                     viewBox={"0 0 38 38"}
                                     fill={'#2157F2'}
                            />
                        </FlexWrapper>
                    </InfoWrapper>
                </Box>
                <FlexWrapper justify={"center"} align={"center"} gap={"22px"}>
                    <LinkIcon href="#"
                              iconId={"instagramColor"}
                              width={"33"}
                              height={"33"}
                              viewBox={"0 0 33 33"}/>
                    <LinkIcon href="#"
                              iconId={"whatsappColor"}
                              width={"33"}
                              height={"33"}
                              viewBox={"0 0 33 33"}/>
                    <LinkIcon href="#"
                              iconId={"telegramColor"}
                              width={"33"}
                              height={"33"}
                              viewBox={"0 0 33 33"}/>
                </FlexWrapper>

            </Container>
        </StyledContact>
    );
};

const StyledContact = styled.section`
    padding: 65px 0 197px;
`

const Box = styled.div`
    margin: 89px auto 65px;
    //padding: 53px 113px 46px 82px;
    padding: 113px 20px 82px;
    max-width: 932px;
    box-shadow: 8px 8px 34px 0 rgba(0, 0, 0, 0.05);
    background-color: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 10px;

    @media ${({theme}) => theme.media.tablet} {
        flex-direction: column;
        row-gap: 43px;
        box-shadow: none;
        padding: 0;
        margin: 68px auto 43px;
    }
`

const Title = styled.h3`
    font-weight: 500;
    font-size: 36px;
    line-height: 136%;
    color: #000;
    margin-bottom: 23px;
`

const Field = styled.input`
    width: 100%;

    &[type] {
        max-width: 49%;
    }

    border-radius: 9px;
    border: none;
    background-color: #f5f5f5;
    font-family: "Roboto", sans-serif;

    color: black;
    font-size: 13px;
    line-height: 136%;
    padding: 10px 30px;
`


const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 430px;

    textarea {
        resize: none;
        height: 150px;
    }

    @media ${({theme}) => theme.media.tablet} {
        box-shadow: 8px 8px 34px 0 rgba(0, 0, 0, 0.05);
        padding: 53px 82px 46px;
        max-width: 593px;
    }
`

const InfoWrapper = styled.div`
    display: flex;
    //flex-direction: column;
    justify-content: center;
    align-items: center;
    //gap: 30px;
    @media ${({theme}) => theme.media.tablet} {
        box-shadow: 8px 8px 34px 0 rgba(0, 0, 0, 0.05);
        padding: 60px 107px 89px;
        max-width: 593px;
        width: 100%;
    }
`

const StyledForm = styled.form`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    row-gap: 25px;

    ${Button} {
        border-radius: 9px;
        padding: 10px 40px;
        font-weight: 600;
        line-height: 136%;
    }
`
