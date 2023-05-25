import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';



let AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"enter u message"} name={'newPostText'} component = "textarea" />
            </div>
            <div>
                <button >Add posts</button>
            </div>
            <button >Remove posts</button>
        </form>
    )
}

const AddPostFormRedux = reduxForm ({
    form: 'ProfileAddNewPostForm',
})(AddNewPostForm);

const MyPosts = (props) => {

    let postsElements = props.posts.map((p) => {
        return <Post message={p.message} like={p.like} />
    });

    let newPostElement = React.createRef();

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={s.postsBlock}>
            <h2>My posts</h2>
            <AddPostFormRedux onSubmit={onAddPost} />

            <div className={s.posts}>
                {postsElements};
            </div>
        </div>
    )
}

export default MyPosts;