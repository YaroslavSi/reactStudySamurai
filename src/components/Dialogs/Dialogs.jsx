import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';


const Dialogs = (props) => {
    
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map((dialog) => { return <DialogItem name={dialog.name} id={dialog.id} />})
    let messagesElements = state.messages.map((m) => { return <Message message={m.message} />})
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    };

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    };

    let createElem = React.createRef();
    let clickBtn = () => {
        let clic = createElem.current.value;
        alert(clic);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements};
                <textarea ref={createElem}>dsd</textarea>
                <button onClick={clickBtn}>Click me</button>
            </div>

            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea onChange={onNewMessageChange} value={newMessageBody} placeholder='Enter u message'></textarea></div>
                    <div><button onClick={onSendMessageClick}>send</button></div>
                </div>
                
            </div>
            
        </div>
    )
}

export default Dialogs;