import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item} >
                <NavLink to='/Profile'>Profile</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to='/Dialogs'>Dialogs</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/News">News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/Music">Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/Settingss" activeClassName={s.activeLink}>Settingss</NavLink>
            </div>
        </nav>
    )
}


export default Navbar;