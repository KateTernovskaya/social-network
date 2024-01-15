import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/wrapper/Container";

export const Profile = () => {
    return (
        <StyledProfile>
                <img src="https://w.forfun.com/fetch/e2/e2092a2bba26bc1aad412fadc70188ea.jpeg" alt=""/>

                <User>ava + description</User>

                <div>
                    my posts
                    <div>new posts</div>
                    <PostsGallery>
                        <div>post1</div>
                        <div>post2</div>
                    </PostsGallery>
                </div>


        </StyledProfile>

    );
};

const StyledProfile = styled.section`
    grid-area: c;
    background-color: rgba(187, 117, 204, 0.63);

 img {
    width: 100%;
   height: 40%;
    object-fit: cover;
  }
`

const User = styled.div`

`

const PostsGallery = styled.div`

`
