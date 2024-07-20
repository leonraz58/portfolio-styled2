import React from 'react';
import styled from "styled-components";

type TabMenuPropsType = {
    tabsData: string[]
}

export const TabMenu = (props: TabMenuPropsType) => {
    return (
        <StyledTabMenu>
            <ul>
                {props.tabsData.map((tab, index) => {
                    return (
                        <li key={index}>
                            <TabButton>{tab}</TabButton>
                        </li>
                    )
                })}
            </ul>
        </StyledTabMenu>
    );
};

const StyledTabMenu = styled.nav`
    width: 100%;
    margin-top: 89px;
    
    ul {
        display: flex;
        justify-content: space-around;
        
        li {
            max-width: 159px;
            width: 100%;
        }
    }
`

const TabButton = styled.button`
    background-color: #F8FAFF;
    color: #1f1f1f;
    border: 3px solid #a6bcfa;
    border-radius: 67px;
    padding: 8px 0;
    width: 100%;

    font-weight: 400;
    font-size: 20px;
    line-height: 136%;
`