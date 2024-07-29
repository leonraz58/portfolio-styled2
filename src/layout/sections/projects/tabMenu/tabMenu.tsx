import React from 'react';
import styled, {css} from "styled-components";

export type TabsStatusType = "story"|"post"|"banner"|"trailer"|"design"|"more"

type TabMenuPropsType = {
    tabsData: Array<{ title: string, status: TabsStatusType }>
    changeFilterStatus: (status: TabsStatusType) => void
    currentFilterStatus: TabsStatusType
}

export const TabMenu = (props: TabMenuPropsType) => {
    return (
        <StyledTabMenu>
            <ul>
                {props.tabsData.map((tab, index) => {
                    return (
                        <li key={index}>
                            <TabButton onClick={()=>{props.changeFilterStatus(tab.status)}}
                                       active={props.currentFilterStatus === tab.status}
                            >
                                {tab.title}
                            </TabButton>
                        </li>
                    )
                })}
            </ul>
        </StyledTabMenu>
    );
};

const StyledTabMenu = styled.nav`
    //width: 100%;
    margin-top: 89px;

    ul {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(159px, 1fr));


        column-gap: 40px;
        row-gap: 30px;
        margin-bottom: 60px;

        @media ${({theme}) => theme.media.mobile} {
            grid-template-columns: repeat(auto-fit, minmax(96px, 1fr));
            column-gap: 25px;
            row-gap: 18px;
        }
    }

`

const TabButton = styled.button<{active: boolean}>`
    background-color: #F8FAFF;
    color: #1f1f1f;
    border: 3px solid #a6bcfa;
    border-radius: 67px;
    padding: 8px 0;
    width: 100%;

    font-weight: 400;
    font-size: 20px;
    line-height: 136%;

    &:hover {
        color: #FFFFFF;
        border: 3px solid #a6bcfa;
        background-color: #a6bcfa;
    }
    
    ${props => props.active && css`
        & {
            color: #FFFFFF;
            border: 3px solid #a6bcfa;
            background-color: #a6bcfa;
        }        
    `}
`