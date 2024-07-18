import styled from "styled-components";

type LinkPropsType = {
    color?: string,
    fontSize?: string,
    fontWeight?: string
}

export const StyledLink = styled.a<LinkPropsType>`
    color: ${props => props.color || "#6C92FF"};
    font-size: ${props => props.fontSize || "16px"};
    font-weight: ${props => props.fontWeight || "600"};    
`