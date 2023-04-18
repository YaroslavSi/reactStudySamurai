import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";


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
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
  }
};


export default store;