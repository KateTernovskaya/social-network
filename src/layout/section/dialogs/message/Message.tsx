import React from 'react';
import styled from "styled-components";
import {theme} from "../../../../styles/Theme";

type MessagePropsType = {
    message: string
}

export const Message: React.FC<MessagePropsType> = ({message}) => {
    return (
        <StyledMessage> {message} </StyledMessage>
    );
};

const StyledMessage = styled.div`
  background-color: ${theme.colors.accent};
  padding: 10px 30px;
  border-radius: 20px;
  color: white;
  
  &:not(:first-child){
    margin: 20px 0; 
  }
  
  
`
