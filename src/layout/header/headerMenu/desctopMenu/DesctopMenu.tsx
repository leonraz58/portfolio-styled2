import {Menu} from "../menu/Menu";
import React from "react";
import styled from "styled-components";

export const DesktopMenu: React.FC = () => {
    return (
        <StyledDesktopMenu>
            <Menu/>
        </StyledDesktopMenu>
    );
};

const StyledDesktopMenu = styled.nav`
    ul {
        display: flex;
        gap: 58px;
        justify-content: center;
        align-items: center;
    }
    
    margin-right: 60px;

    //@media screen and (max-width: 570px){
    @media ${({theme}) => theme.media.mobile} {
        margin-right: 33px;

        ul {
            display: flex;
            gap: 30px;
            justify-content: center;
            align-items: center;
        }
    }
    
`