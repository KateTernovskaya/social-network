import React from 'react';
import styled from "styled-components";
import {theme} from "../../../../styles/Theme";

type MessagePropsType = {
    id: string
    message: string
}

export const Message: React.FC<MessagePropsType> = ({id, message}) => {
    return (
        <StyledMessage id={id}> {message} </StyledMessage>
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
