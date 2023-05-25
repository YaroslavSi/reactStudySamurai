import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Prealoader';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            {/* <div>
                <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"  alt="tree"></img>
            </div> */}

            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} />
                <ProfileStatus status = {props.status} updateStatus = {props.updateStatus} />
            </div>
        </div>
    );
}

export default ProfileInfo;