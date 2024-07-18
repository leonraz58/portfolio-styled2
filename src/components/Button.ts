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
`