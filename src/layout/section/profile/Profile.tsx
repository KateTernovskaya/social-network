import React from 'react';
import styled from "styled-components";
import {MyPosts} from "./myPosts/MyPosts";
import {UserInfo} from "./userInfo/UserInfo";
import Bg from "../../../assets/images/raccoon-back.jpg"


export const Profile = () => {
    return (
        <StyledProfile>
            <ProfileImg src={Bg}/>
            <UserInfo/>
            <MyPosts/>
        </StyledProfile>
    );
};

const StyledProfile = styled.section`

`

const ProfileImg = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`

