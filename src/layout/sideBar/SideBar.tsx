import React from 'react';
import styled from "styled-components";

const MenuItems = ['Profile', 'Messages', 'News', 'Music', 'Settings',]

export const SideBar = () => {
    return (
        <StyledSideBar>
            <nav >
                <ul>
                    {MenuItems.map(item =>{
                        return (
                            <li><a href="">{item}</a></li>
                        )
                    })}
                </ul>
            </nav>
        </StyledSideBar>
    );
};

const StyledSideBar = styled.aside`
  grid-area: n;
 background-color: #cbc7c7;
  text-align: center;
  padding: 30px 0;
  
  li{
    padding: 10px;
  }
`
