import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            my posts
            <div>
                <textarea></textarea>
                <button>Add posts</button>
                <button>Remove posts</button>
            </div>

            <div className={s.posts}>
                <Post message="Hi, how are you?" like="like: 25" />
                <Post message="It's my fist post" like="like: 32" />
            </div>
        </div>
    )
}

export default MyPosts;