/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import MyPosts from './MyPosts';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../../Redux/profileReducer';

function MyPostsContainer(props) {
    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let onTextareaChange = (text) => {
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action);
    }

    return (
        <MyPosts
            updateNewPostText={onTextareaChange}
            addPost={addPost}
            posts={state.profilePage.postsData}
            newPostText={state.profilePage.newPostText} />
    );
}

export default MyPostsContainer;