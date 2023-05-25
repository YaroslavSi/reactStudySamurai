import React from 'react';
import { sendMessageCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthNavigate } from '../../hoc/withAuthNavigate';
import { compose } from 'redux';

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
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageBody) => {    
            dispatch(sendMessageCreator(newMessageBody));
        }
    }
}


export default compose (
    connect(mapStateToProps, mapDispatchToProps),
    // withAuthNavigate,
)(Dialogs);