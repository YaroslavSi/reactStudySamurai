const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';

let initialState = {
    posts: [    
        {id: 1, message: 'Hi, how are you?', like: 'like: 25'},
        {id: 2, message: 'It is my fist post', like: "like: 32"},
    ],
    newPostText: 'LadySecret'
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                like: 0,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: '',
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText,
            };
        }
        default:
            return state;
    }
    
};


export const addPostActionCreator = () => ({type: 'ADD-POST'});
export const updateNewPostTextActionCreator = (text) => 
  ({type: 'UPDATE-NEW-POST-TEXT', newText: text});
export default profileReducer;
