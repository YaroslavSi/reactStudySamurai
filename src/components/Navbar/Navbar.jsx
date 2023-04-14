import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

const Navbar = (props) => {
    return (
        <nav className={s.nav}>
            <div className={s.item} >
                <NavLink to='/profile'>Profile</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to='/dialogs'>Dialogs</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/news">News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/Music">Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/Settingss" activeClassName={s.activeLink}>Settingss</NavLink>
            </div>
            <div className={s.friends}>
                <div className="container">
                    <div className={s.friend_item}>
                        <img src="https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg" alt="" />
                        <div className="name">Andrey</div>
                    </div>
                    <div className={s.friend_item}>
                        <img src="https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg" alt="" />
                        <div className="name">Masha</div>
                    </div>
                    <div className={s.friend_item}>
                        <img src="https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg" alt="" />
                        <div className="name">Vasya</div>
                    </div>
                </div>
            </div>
        </nav>
    )
}


export default Navbar;