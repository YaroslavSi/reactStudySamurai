import React from "react";
import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";

let state = {
    posts: [    
        {id: 1, message: 'Hi, how are you?', like: 'like: 25'},
        {id: 2, message: 'It is my fist post', like: "like: 32"},
    ]
};

it ('message of new post should be correct', () => {
    //1 test data
    let action = addPostActionCreator('bmw.ua');
    
    //2 action
    let newState = profileReducer (state, action);

    //3 expectation
    expect(newState.posts[4].message).toBe('It is my fist post');
})

it ('length of posts should be incremented', () => {
    //1 test data
    let action = addPostActionCreator('bmw.ua');
    
    //2 action
    let newState = profileReducer (state, action);

    //3 expectation
    expect(newState.posts.length).toBe(5);
})

it ('length after deleting of message should be decrement', () => {
    //1 test data
    let action = deletePost(1);
    
    //2 action
    let newState = profileReducer (state, action);

    //3 expectation
    expect(newState.posts.length).toBe(1);
})

it ('after deleting length shouldnt be decrement if id is incorrect', () => {
    //1 test data
    let action = deletePost(1000);
    
    //2 action
    let newState = profileReducer (state, action);

    //3 expectation
    expect(newState.posts.length).toBe(2);
})