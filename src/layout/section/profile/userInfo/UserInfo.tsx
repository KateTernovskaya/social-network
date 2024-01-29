import React from 'react';
import styled from "styled-components";
import Avatar from '../../../../assets/images/avatar.jpg'

export const UserInfo = () => {
    return (
        <StyledUserInfo>
            <img src={Avatar} alt=""/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias ea est id incidunt ipsam itaque modi
                nemo quia quidem repellendus.um dolor sit amet, consectetur adipisicing elit. Alias ea est id incidunt
                ipsam itaque modi
                nemo quia quidem repel
            </p>
        </StyledUserInfo>
    );
};

const StyledUserInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;

  img {
    width: 300px;
    height: 300px;
    object-fit: cover;
    border-radius: 10px;
  }

  p {
    text-align: justify;
  }
`