import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import { Navigate } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';


const Dialogs = (props) => {
    
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map((dialog) => { return <DialogItem name={dialog.name}  id={dialog.id} />})
    let messagesElements = state.messages.map((m) => { return <Message message={m.message}  />})
    let newMessageBody = state.newMessageBody;



    let createElem = React.createRef();
    let clickBtn = () => {
        let clic = createElem.current.value;
        alert(clic);
    }

    if (props.isAuth == false) {
        return (
            <Navigate to={'/login'} />
        )
    }

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
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
                 
                
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage} />
            
        </div>
    )
}



const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            
            <Field placeholder={"enter u message"} name={'newMessageBody'} component = "textarea" />
            <button>send</button>
        </form>
    )
}
const AddMessageFormRedux = reduxForm ({
    form: 'dialogAddMessageForm',
})(AddMessageForm);

export default Dialogs;