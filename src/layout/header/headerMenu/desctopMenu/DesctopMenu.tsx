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
    }
    
`