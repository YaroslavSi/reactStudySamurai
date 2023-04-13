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
    },

    sideBar: {
        friendsName: [
            {name: 'Andrey'},
            {name: 'Masha'},
            {name: 'Vasya'}
        ]
    }
  },
  getState () {
    return this._state;
  },

  _callSubscriber () {
    console.log('state was changed');
  },

  addPost () {
    let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        like: 0,
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state);
  },

  updateNewPostText (newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },

  subscribe (observer) {
    this._callSubscriber = observer;
  }
};

export default store;