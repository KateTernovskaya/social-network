import styled from "styled-components";
import {theme} from "../../../../styles/Theme";

//MyPosts
const MyPosts = styled.div`
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

//PostItem
const Post = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  padding: 30px 0;
`

const PostItemImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
`

const PostText = styled.p`
  width: 70%;
  text-align: justify;
  border-bottom: 1px solid #ccc5c5;
  padding-bottom: 30px;
`

const LikeCount = styled.div`
  background-color: ${theme.colors.accent};
  padding: 10px 20px;
  color: white;
  margin-left: 20px;
  border-radius: 5px;
  text-align: center;
`

export const S ={
    MyPosts,
    TitlePosts,
    NewPost,
    PostsGallery,
    Post,
    PostItemImg,
    PostText,
    LikeCount,
}