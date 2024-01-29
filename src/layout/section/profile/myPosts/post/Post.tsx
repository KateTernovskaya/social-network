import React from 'react';
import styled from "styled-components";
import Avatar from '../../../../../assets/images/avatar.jpg'
import {theme} from "../../../../../styles/Theme";

type PostPropsType = {
    message: string
    likeCount: number
}
export const Post = (props: PostPropsType) => {
    return (
        <PostItem>
            <PostItemImg src={Avatar} alt=""/>
            <PostMessage>   {props.message}</PostMessage>
            <LikeCount>Like {props.likeCount}</LikeCount>
        </PostItem>

    );
};

const PostItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin: 30px;
`

const PostItemImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
`
const PostMessage = styled.p`
  width: 70%;
  text-align: justify;
`
const LikeCount = styled.div`
  background-color: ${theme.colors.accent};
  padding: 10px 20px;
  color: white;
  margin-left: 20px;
  border-radius: 5px;
  text-align: center;

`