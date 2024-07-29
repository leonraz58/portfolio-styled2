import styled from "styled-components";

type ButtonPropsType = {
    backgroundColor?: string,
    color?: string
    padding?: string
}

export const Button = styled.button<ButtonPropsType>`
    border: none;
    border-radius: 20px;
    background-color: ${props => props.backgroundColor || "#2157F2"};
    color: ${props => props.color || "white"};
    padding: ${props => props.padding || "15px 35px"};
    font-weight: 700;
    font-size: 15px;
    line-height: 150%;
    white-space: nowrap;
`

export const CardButton = styled(Button)`
    font-size: 14px;
    line-height: 148%;
    background-color: #2157F2;   
    color: #F9F9FC;
    padding: ${props => props.padding || "4px 18px"};
    height: 29px;

    @media screen and (max-width: 650px){
        height: 18px;
        font-size: 8px;
        padding: ${props => props.padding || "2px 11px"};
    }
`