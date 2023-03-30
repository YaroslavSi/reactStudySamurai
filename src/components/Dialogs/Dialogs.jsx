import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';


const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + '' + s.active}>
                    <NavLink to="/Dialogs/1">Yaroslav</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/Dialogs/2">Sasha</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/Dialogs/3">Andrey</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/4">Valera</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/5">Viktor</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/6">Viktoriia</NavLink>
                </div>
            </div>

            <div className={s.messages}>
                <div className={s.message}>Hello World!</div>
                <div className={s.message}>How are u?</div>
                <div className={s.message}>Okey</div>
            </div>
        </div>
    )
}

export default Dialogs;