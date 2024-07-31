import styled from "styled-components";
import React from "react";

const items = [
    {
        title: "Home",
        href: "home"
    },
    {
        title: "Projects",
        href: "projects"
    },
    {
        title: "About",
        href: "about"
    },
    {
        title: "Contact",
        href: "contact"
    }
]


export const Menu: React.FC = () => {
    return (
        <ul>
            {items.map((item, i) => {
                return <MenuItem key={i}>
                    <NavLink
                        href={item.href}
                    >
                        {item.title}
                    </NavLink>
                </MenuItem>
            })}
        </ul>
    );
};

const NavLink = styled.a`
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    font-weight: 400;
    text-align: center;
    color: #393939;
    position: relative;

    &::before {
        content: "";
        display: block;
        position: absolute;
        bottom: -3px;
        height: 2px;
        background-color: #A6BCFA;
        transition: 0.5s;
        width: 0%;
    }
    
    &:hover {
        &::before {
            width: 100%;
            
        }
    }
`

const MenuItem = styled.li`
    
`