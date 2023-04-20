import React from 'react';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import storeContext from '../../storeContext';

const DialogsContainer = () => {

    return (
        <storeContext.Consumer> 
        {   (store) => {
                let onSendMessageClick = () => {
                    store.dispatch(sendMessageCreator());
                };
            
                let onNewMessageChange = (body) => {
                    store.dispatch(updateNewMessageBodyCreator(body));
                };
            
  
                return <Dialogs updateNewMessageBody = {onNewMessageChange} sendMessage = {onSendMessageClick}
                dialogsPage = {store.getState().dialogsPage}/>
                }
        }
        </storeContext.Consumer>
    )
}

export default DialogsContainer;