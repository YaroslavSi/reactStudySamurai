import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';


const Dialogs = (props) => {
    

    let dialogsElements = props.state.dialogs.map((dialog) => { return <DialogItem name={dialog.name} id={dialog.id} />})
    let messagesElements = props.state.messages.map((m) => { return <Message message={m.message} />})

    let createElem = React.createRef();
    let clickBtn = () => {
        let clic = createElem.current.value;
        alert(clic);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements};
                <textarea ref={createElem}></textarea>
                <button onClick={clickBtn}>Click me</button>
            </div>

            <div className={s.messages}>
                {messagesElements}
                
            </div>
            
        </div>
    )
}

export default Dialogs;