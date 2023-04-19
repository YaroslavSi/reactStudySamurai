import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsElements = props.posts.map((p) => {
        return <Post message={p.message} like={p.like} />
    });

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={s.postsBlock}>
            <h2>My posts</h2>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref= {newPostElement} value={props.newPostText}></textarea>
                </div>
                <div>
                    <button onClick={onAddPost}>Add posts</button>
                </div>
                <button >Remove posts</button>
            </div>

            <div className={s.posts}>
                {postsElements};
            </div>
        </div>
    )
}

export default MyPosts;