import React from 'react';
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {theme} from "../../styles/Theme";

const MenuItems = [
    {
        title: 'Profile',
        src: '/profile'
    }, {
        title: 'Messages',
        src: '/dialogs'
    }, {
        title: 'News',
        src: '/news'
    }, {
        title: 'Music',
        src: '/music'
    }, {
        title: 'Settings',
        src: '/settings'
    },
]

export const SideBar = () => {
    const menuItem = MenuItems.map((item, index) => {
        return (
            <li key={index}>
                <NavLink to={item.src}>{item.title}</NavLink>
            </li>
        )
    })

    return (
        <StyledSideBar>
            <nav>
                <ul>{menuItem}</ul>
            </nav>
        </StyledSideBar>
    );
};

const StyledSideBar = styled.aside`
  background-color: rgba(97, 119, 127, 0.03);
  text-align: center;
  padding: 30px 0;
  border-radius: 15px;
  height: 100%;

  li:last-child {
    margin-top: 40px;
  }

  li {
    padding: 10px;
  }

  a.active {
    color: ${theme.colors.accent};
    border-bottom: 1px solid ${theme.colors.accent};
  }
`
