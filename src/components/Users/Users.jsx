import React from 'react';
import styles from './users.module.css';

const Users = (props) => {
    if (props.users.length ===0){
        props.setUsers ( users: [
                {id: 1, photoUrl: 'https://static.wikia.nocookie.net/naruto/images/b/bb/Itachi.png/revision/latest?cb=20210225204731&path-prefix=ru', 
                followed: false, fullName: 'Yarik', status: 'winner', location: {city: 'Belya', country: 'Ukraine'}},
                {id: 2, photoUrl: 'https://static.wikia.nocookie.net/naruto/images/b/bb/Itachi.png/revision/latest?cb=20210225204731&path-prefix=ru', 
                followed: true, fullName: 'Sasha', status: 'Clean', location: {city: 'Paris', country: 'France'}},
                {id: 3, photoUrl: 'https://static.wikia.nocookie.net/naruto/images/b/bb/Itachi.png/revision/latest?cb=20210225204731&path-prefix=ru', 
                followed: false, fullName: 'Andrew', status: 'winner too', location: {city: 'Warsaw', country: 'Poland'}},
            ]
        )
    }
    
    return (
        <div>
            {
                props.users.map(callbackfn: u => <div key={undefined.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} className='styles.userPhoto' />
                        </div>
                        <div>
                            { u.followed 
                                ? <button onClick={() => {props.unfollow(u.id)}}>UnFollow</button> 
                                : <button onClick={() => {props.follow(u.id)}}>Follow</button> }
                            
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users;