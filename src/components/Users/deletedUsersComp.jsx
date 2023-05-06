import React from 'react';
import styles from './users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/photo.png';

const Users = (props) => {

    let getUsers = () => {
        if (props.users.length ===0){
            axios
                .get('https://social-network.samuraijs.com/api/1.0/users')
                .then(Response => {
                    props.setUsers (Response.data.items);
                
                });
        }   
    }
    
    return (
        <div>
        <button onClick={getUsers}>Get users</button>
            {
                props.users.map(callbackfn: u => <div key={undefined.id}>
                    <span>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className='styles.userPhoto' />
                        </div>
                        <div>
                            { u.followed 
                                ? <button onClick={() => {props.unfollow(u.id)}}>UnFollow</button> 
                                : <button onClick={() => {props.follow(u.id)}}>Follow</button> }
                            
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users;