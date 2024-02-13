import React from 'react';
import {S} from '../myPosts_Styles'

type PostPropsType = {
    id: string
    avatar: string
    text: string
    likeCount: number
}
export const Post = (props: PostPropsType) => {
    return (
        <S.Post id={props.id}>
            <S.PostItemImg src={props.avatar} alt=""/>
            <S.PostText>   {props.text}</S.PostText>
            <S.LikeCount>Like {props.likeCount}</S.LikeCount>
        </S.Post>

    );
};

