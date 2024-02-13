import React from 'react';
import {Container} from "../../components/wrapper/container";
import {Logo} from "../../components/logo/logo";
import styled from "styled-components";
import {theme} from "../../styles/Theme";

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <Logo color={'white'}/>
                <span> RaccoonGram</span>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.header`
  background-color: ${theme.colors.accent};
  margin-top: 50px;

  ${Container} {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  span {
    font-family: 'Poor Story', system-ui;
    font-size: 60px;
    color: white;
  }
`