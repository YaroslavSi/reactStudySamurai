import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';


const DialogsContainer = (props) => {
    
    let state = props.store.getState().dialogsPage;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    };

    let onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body));
    };

    let createElem = React.createRef();
    let clickBtn = () => {
        let clic = createElem.current.value;
        alert(clic);
    }

    return (
        <Dialogs updateNewMessageBody = {onNewMessageChange} sendMessage = {onSendMessageClick}
        dialogsPage = {state}/>
    )
}

export default DialogsContainer;