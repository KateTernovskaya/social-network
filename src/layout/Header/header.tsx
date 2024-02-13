import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/logo";
import {Container} from "../../components/wrapper/container";
import {theme} from "../../styles/Theme";

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <Logo color={'white'}/>
                <span> RaccoonGram</span>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  background-color: ${theme.colors.accent};

  ${Container} {
    display: flex;
    align-items: center;
    gap: 20px;
    justify-content: center;
  }

  span {
    font-family: 'Poor Story', system-ui;
    font-size: 60px;
    color: white;
  }
`

