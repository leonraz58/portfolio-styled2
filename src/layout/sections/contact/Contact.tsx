import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Button} from "../../../components/Button";
import {LinkIcon} from "../../../components/Icon/Icon";

export const Contact = () => {
    return (
        <StyledContact>
            <Container>
                <SectionTitle>Contact Us</SectionTitle>
                <Box>
                    <FlexWrapper justify={"space-between"} align={"center"}>
                        <FormWrapper>
                            <Title>Get in touch</Title>
                            <StyledForm>
                                <Field type={"email"} placeholder={"e-mail"}/>
                                <Field type={"phone"} placeholder={"phone"}/>
                                <Field as={'textarea'} placeholder={"massage"}/>
                                <Button>Send</Button>
                            </StyledForm>
                        </FormWrapper>
                        <FlexWrapper direction={"column"} justify={"flex-end"} gap={"30px"}>
                            <FlexWrapper align={"center"} gap={"23px"}>
                                <LinkIcon href="#"
                                          iconId={"location"}
                                          width={"38"}
                                          height={"38"}
                                          viewBox={"0 0 38 38"}
                                          fill={'#2157F2'}/>
                                <FlexWrapper direction={"column"} justify={"space-between"} align={"start"}>
                                    <Text1>Location</Text1>
                                    <Text2>Mashhad/Iran</Text2>
                                </FlexWrapper>
                            </FlexWrapper>

                            <FlexWrapper align={"center"} gap={"23px"}>
                                <LinkIcon href="#"
                                          iconId={"phone"}
                                          width={"38"}
                                          height={"38"}
                                          viewBox={"0 0 26 26"}/>
                                <FlexWrapper direction={"column"} justify={"space-between"} align={"start"}>
                                    <Text1>Phone</Text1>
                                    <Text2>+989150063913</Text2>
                                </FlexWrapper>
                            </FlexWrapper>

                            <FlexWrapper align={"center"} gap={"23px"}>
                                <LinkIcon href="#"
                                          iconId={"email"}
                                          width={"38"}
                                          height={"38"}
                                          viewBox={"0 0 38 38"}
                                          fill={'#2157F2'}/>
                                <FlexWrapper direction={"column"} justify={"space-between"} align={"start"}>
                                    <Text1>Email</Text1>
                                    <Text2>arkn3913@gmail.com</Text2>
                                </FlexWrapper>
                            </FlexWrapper>
                        </FlexWrapper>
                    </FlexWrapper>
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
    padding: 53px 113px 46px 82px;
    width: 932px;
    box-shadow: 8px 8px 34px 0 rgba(0, 0, 0, 0.05);
    background-color: #fff;
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
    //flex-wrap: wrap;
    max-width: 430px;    
    
    textarea {
        resize: none;
        height: 150px;
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

const Text1 = styled.h4 `
    font-weight: 500;
    font-size: 16px;
    line-height: 136%;
    text-align: center;
    color: #000;
`

const Text2 = styled.h5 `
    font-weight: 400;
    font-size: 12px;
    line-height: 136%;
    text-align: center;
    color: #8b8b8b;    
`

