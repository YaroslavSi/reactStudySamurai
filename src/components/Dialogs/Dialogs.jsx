import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const Dialog = (props) => {
    let path = "/Dialogs/" + props.id;
    return (
        <div className={s.dialog + '' + s.active}>
            <NavLink to={path}> {props.name} </NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.messages}>
                <div className={s.message}>{props.message}</div>
        </div>
    )
}

const Dialogs = (props) => {
    let dialogsData = [
        {id: 1, name: 'Yaroslav'},
        {id: 2, name: 'Sasha'},
        {id: 3, name: 'Andrey'},
        {id: 4, name: 'Valera'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Viktoriia'}
    ]

    let messageData = [
        {id: 1, message: 'Hello World!'},
        {id: 1, message: 'How are u?'},
        {id: 1, message: 'Okey'},
        {id: 1, message: 'Okey'}
    ]

    let dialogsElements = [
        <Dialog name={dialogsData[0].name} id={dialogsData[0].id} />,
        <Dialog name={dialogsData[1].name} id={dialogsData[1].id} />,
        <Dialog name={dialogsData[2].name} id={dialogsData[2].id} />,
        <Dialog name={dialogsData[3].name} id={dialogsData[3].id} />,
        <Dialog name={dialogsData[4].name} id={dialogsData[4].id} />,
        <Dialog name={dialogsData[5].name} id={dialogsData[5].id} />,
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements};
            </div>

            <div className={s.messages}>
                <Message message={messageData[0].message} />
                <Message message={messageData[1].message} />
                <Message message={messageData[2].message} />
                <Message message={messageData[3].message} />
            </div>
        </div>
    )
}

export default Dialogs;