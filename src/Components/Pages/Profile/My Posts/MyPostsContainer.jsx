/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import MyPosts from './MyPosts';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../../Redux/profileReducer';

function MyPostsContainer(props) {
    let state = props.store.getState();
    let dispatch = props.store.dispatch;

    let addPost = () => {
        dispatch(addPostActionCreator());
    }

    let onTextareaChange = (text) => {
        let action = updateNewPostTextActionCreator(text);
        dispatch(action);
    }

    return (
        <MyPosts
            updateNewPostText={onTextareaChange}
            addPost={addPost}
            posts={state.profilePage.postsData}
            postTextarea={state.profilePage.postTextarea} />
    );
}

export default MyPostsContainer;