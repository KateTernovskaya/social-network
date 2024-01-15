import React from 'react';

import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";

export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  grid-area: h;
  background-color: #f8b3b3;

  img {
    max-width: 200px;
    height: 60px;
    object-fit: cover;
    background-color: transparent;
  }
`

