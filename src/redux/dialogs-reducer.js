const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    messages: [
        {id: 1, message: 'Hello World!'},
        {id: 1, message: 'How are u?'},
        {id: 1, message: 'Okey'},
        {id: 1, message: 'Okey'}
    ],
    dialogs: [
        {id: 1, name: 'Yaroslav'},
        {id: 2, name: 'Sasha'},
        {id: 3, name: 'Andrey'},
        {id: 4, name: 'Valera'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Viktoriia'}
    ],
    newMessageBody: ''
};

const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 6, message: body});
            return state;
        default: 
            return state;
    }
};


export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) => 
  ({type: 'UPDATE_NEW_MESSAGE_BODY', body: body});
export default dialogsReducer;