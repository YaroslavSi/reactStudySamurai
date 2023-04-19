import { combineReducers, createStore } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let reducers = combineReducers ({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    // sideBar: sideBar,
    
});

let store = createStore(reducers);

export default store;