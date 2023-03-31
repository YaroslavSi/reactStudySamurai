import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    let postData = [
        {id: 1, message: 'Hi, how are you?', like: 'like: 25'},
        {id: 2, message: 'It is my fist post', like: "like: 32"},
    ]
    return (
        <div className={s.postsBlock}>
            <h2>My posts</h2>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add posts</button>
                </div>
                <button>Remove posts</button>
            </div>

            <div className={s.posts}>
                <Post message={postData[0].message} like={postData[0].like} />
                <Post message={postData[1].message} like={postData[1].like} />
            </div>
        </div>
    )
}

export default MyPosts;