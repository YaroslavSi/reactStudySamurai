import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"  alt="tree"></img>
            </div>

            <div className={s.descriptionBlock}>
                ava + descr
            </div>
        </div>
    );
}

export default ProfileInfo;