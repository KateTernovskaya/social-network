import React from 'react';
import {Post} from "./post/Post";
import Avatar from '../../../../assets/images/avatar.jpg'
import {S} from './myPosts_Styles'

let postsData = [
    {
        id: '1',
        avatar: Avatar,
        text: 'At half past eight, Mr. Dursley picked up his briefcase, pecked Mrs. Dursley on the cheek, and tried to kiss Dudley good-bye but missed, because Dudley was now having a tantrum and throwing his cereal at the walls. «Little tyke,» chortled Mr. Dursley as he left the house. He got into his car and backed out of number four\'s drive.',
        likeCount: 3,
    },
    {
        id: '2',
        avatar: Avatar,
        text: 'It was on the corner of the street that he noticed the first sign of something peculiar – a cat reading a map. For a second, Mr. Dursley didn\'t realize what he had seen – then he jerked his head around to look again. There was a tabby cat standing on the corner of Privet Drive, but there wasn\'t a map in sight. What could he have been thinking of? It must have been a trick of the light. Mr. Dursley blinked and stared at the cat. It stared back. As Mr. Dursley drove around the corner and up the road, he watched the cat in his mirror. It was now reading the sign that said Privet Drive – no, looking at the sign; cats couldn\'t read maps or signs. Mr. Dursley gave himself a little shake and put the cat out of his mind. As he drove toward town he thought of nothing except a large order of drills he was hoping to get that day.',
        likeCount: 13,
    },
    {
        id: '3',
        avatar: Avatar,
        text: 'But on the edge of town, drills were driven out of his mind by something else. As he sat in the usual morning traffic jam, he couldn\'t help noticing that there seemed to be a lot of strangely dressed people about. People in cloaks. Mr. Dursley couldn\'t bear people who dressed in funny clothes – the getups you saw on young people! ',
        likeCount: 4,
    },
    {
        id: '4',
        avatar: Avatar,
        text: 'He supposed this was some stupid new fashion. He drummed his fingers on the steering wheel and his eyes fell on a huddle of these weirdos standing quite close by. They were whispering excitedly together. Mr. Dursley was enraged to see that a couple of them weren\'t young at all; why, that man had to be older than he was, and wearing an emerald-green cloak! The nerve of him! But then it struck Mr. Dursley that this was probably some silly stunt – these people were obviously collecting for something… yes, that would be it.',
        likeCount: 5,
    },
    {
        id: '5',
        avatar: Avatar,
        text: 'The traffic moved on and a few minutes later, Mr. Dursley arrived in the Grunnings parking lot, his mind back on drills.',
        likeCount: 3,
    },
    {
        id: '6',
        avatar: Avatar,
        text: 'Mr. Dursley always sat with his back to the window in his office on the ninth floor. If he hadn\'t, he might have found it harder to concentrate on drills that morning. He didn\'t see the owls swoop ing past in broad daylight, though people down in the street did; they pointed and gazed open',
        likeCount: 23,
    },
    {
        id: '7',
        avatar: Avatar,
        text: '- 2 -\n' +
            '\n' +
            'Mr. Dursley, however, had a perfectly normal, owl-free morning. He yelled at five different people.\n' +
            '\n' +
            'He made several important telephone calls and shouted a bit more. He was in a very good mood until lunchtime, when he thought he\'d stretch his legs and walk across the road to buy himself a bun from the bakery.',
        likeCount: 9,
    },
    {
        id: '8',
        avatar: Avatar,
        text: 'He eyed them angrily as he passed. He didn\'t know why, but they made him uneasy. This bunch were whispering excitedly, too, and he couldn\'t see a single collecting tin. It was on his way back past them, clutching a large doughnut in a bag, that he caught a few words of what they were saying.',
        likeCount: 1,
    },
]

const mapPosts = postsData.map(post => {
        return <Post id={post.id}
                     avatar={post.avatar}
                     text={post.text}
                     likeCount={post.likeCount}
        />
    }
)

export const MyPosts = () => {
    return (
        <S.MyPosts>
            <S.TitlePosts>My posts</S.TitlePosts>
            <S.NewPost>
                <input type="text" placeholder={'Typing Post'}/>
                <button>Add post</button>
            </S.NewPost>
            <S.PostsGallery>{mapPosts}</S.PostsGallery>
        </S.MyPosts>

    );
};


