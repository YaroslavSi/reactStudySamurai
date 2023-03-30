import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    console.log(props.message);

    return (
            <div className={s.item}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqq7Wt-_KxgeNATZL-5cAag0XhY1mfhIQLRg&usqp=CAU" alt="" />
                {props.message}
                
                <div>
                    {props.like}
                </div>

            </div>
               
    )
}

export default Post;