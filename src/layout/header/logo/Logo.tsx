import React from "react";
import styled from "styled-components";
import logo from "../../../assets/images/header/logo.svg";
import logo2 from "../../../assets/images/header/logo2.svg";

export const Logo: React.FC = () => {
    return (
            <a>
                <StyledLogo/>
            </a>
    );
};

const StyledLogo = styled.div`
    background-image: url(${logo});
    background-position: 4px 7px;
    width: 90px;
    height: 90px;
    cursor: pointer;
    border-radius: 100%;
    background-color: rgba(166, 188, 250, 0.7);

    @media ${({theme}) => theme.media.tablet} {
        width: 70px;
        height: 70px;
        background-image: url(${logo2});
        background-color: transparent;
        background-position: unset;
        

    }
`