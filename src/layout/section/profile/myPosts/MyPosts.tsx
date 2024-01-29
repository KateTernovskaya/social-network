import React from 'react';
import styled from "styled-components";
import {Post} from "./post/Post";
import {theme} from "../../../../styles/Theme";


export const MyPosts = () => {
    return (
        <StyledMyPosts>
            <TitlePosts>My posts</TitlePosts>
            <NewPost>
                <input type="text" placeholder={'Typing Post'}/>
                <button>Add post</button>
            </NewPost>
            <PostsGallery>
                <Post likeCount={2}
                      message={' Accusamus amet cupiditate dignissimos, distinctio, doloribus ex incidunt ipsum numquam perspiciatis qui quis quisquam sequi!'}/>
                <Post likeCount={9}
                      message={' Distinctio quaerat, similique! Alias blanditiis, debitis dolorum facere id provident veritatis. '}/>
                <Post likeCount={12}
                      message={' Aliquam aliquid ducimus earum error exercitationem, hic ipsam laboriosam modi molestias necessitatibus nobis non, obcaecati, quisquam?'}/>
            </PostsGallery>

        </StyledMyPosts>

    );
};

const StyledMyPosts = styled.div`
  margin: 40px 0;

`
const TitlePosts = styled.h3`
  text-align: center;
  font-size: 24px;
  letter-spacing: 2px;
`

const NewPost = styled.div`
  margin: 30px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  input {
    width: 500px;
    height: 50px;
    font-size: 16px;
    padding: 10px 20px;
  }

  button {
    width: 150px;
    height: 50px;
    background-color: ${theme.colors.accent};
    color: white;
  }
`


const PostsGallery = styled.div`
margin-top: 70px;
`

