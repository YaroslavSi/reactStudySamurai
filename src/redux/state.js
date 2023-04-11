import { renderEntireTree } from "../render";

  let state = {
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
  };


  export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        like: 0,
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    renderEntireTree(state);
  };

  export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    renderEntireTree(state);
  }

export default state;