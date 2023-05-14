import React from 'react';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

// const DialogsContainer = () => {

//     return (
//         <storeContext.Consumer> 
//         {   (store) => {
//                 let onSendMessageClick = () => {
//                     store.dispatch(sendMessageCreator());
//                 };
            
//                 let onNewMessageChange = (body) => {
//                     store.dispatch(updateNewMessageBodyCreator(body));
//                 };
            
  
//                 return <Dialogs updateNewMessageBody = {onNewMessageChange} sendMessage = {onSendMessageClick}
//                 dialogsPage = {store.getState().dialogsPage}/>
//                 }
//         }
//         </storeContext.Consumer>
//     )
// }
let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body));
        },
        sendMessage: () => {    
            dispatch(sendMessageCreator());
        }
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);


export default DialogsContainer;