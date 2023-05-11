import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src='https://cdn.worldvectorlogo.com/logos/bmw-logo-gray-.svg' alt='bmw'></img>
            <div className={s.loginBlock}>
                {props.isAuth ? props.login
                    : <NavLink to = {'/login'}>Login</NavLink> }
            </div>
        </header>
    )
}

export default Header;