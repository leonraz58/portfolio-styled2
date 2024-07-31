import React from "react";
import {FlexWrapper} from "../../components/FlexWrapper";
import styled from "styled-components";
import {Logo} from "./logo/Logo";
import {DesktopMenu} from "./headerMenu/desctopMenu/DesctopMenu";
import {ToggleTheme} from "./themeSwitcher/ThemeSwitcher";

export const Header: React.FC = () => {

    return (
        <StyledHeader>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <Logo/>
                    <FlexWrapper align={"center"} justify={"center"} gap={"60px"}>
                        <DesktopMenu/>
                        <ToggleTheme/>
                    </FlexWrapper>
                </FlexWrapper>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    padding: 20px 40px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99999;
    
`