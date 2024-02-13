import React from 'react';
import {NavLink} from "react-router-dom";
import styled from "styled-components";

type DialogPropsType = {
    id: string
    name: string
}

export const Dialog: React.FC<DialogPropsType> = ({name, id}) => {
    const path = '/dialogs/' + id
    return (
        <StyledDialog>
            <NavLink to={path}>{name}</NavLink>
        </StyledDialog>
    );
};

const StyledDialog = styled.div`
  border: 1px solid black;
  padding: 20px;

  a.active {
    color: gold;
  }
`