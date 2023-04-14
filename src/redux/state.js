const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';


let store = {
  _state : {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', like: 'like: 25'},
            {id: 2, message: 'It is my fist post', like: "like: 32"},
        ],
        newPostText: 'LadySecret'
    },
    
    dialogsPage: {
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
    },

    sideBar: {
        friendsName: [
            {name: 'Andrey'},
            {name: 'Masha'},
            {name: 'Vasya'}
        ]
    },
  },
  getState () {
    return this._state;
  },

  _callSubscriber () {
    console.log('state was changed');
  },


  subscribe (observer) {
    this._callSubscriber = observer;
  },

  dispatch (action) { // {type: 'Add-post'}

    if (action.type === "ADD-POST") {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        like: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);

    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);

    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.dialogsPage.newMessageBody = action.body;
      this._callSubscriber(this._state);

    } else if (action.type === SEND_MESSAGE) {
      let body = this._state.dialogsPage.newMessageBody;
      this._state.dialogsPage.newMessageBody = '';
      this._state.dialogsPage.messages.push({id: 6, message: body});
      this._callSubscriber(this._state);
    }
  }
};

export const addPostActionCreator = () => ({type: 'ADD-POST'});
export const updateNewPostTextActionCreator = (text) => 
  ({type: 'UPDATE-NEW-POST-TEXT', newText: text});

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) => 
  ({type: 'UPDATE_NEW_MESSAGE_BODY', body: body});

export default store;