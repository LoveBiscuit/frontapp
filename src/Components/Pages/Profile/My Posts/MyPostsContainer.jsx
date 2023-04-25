/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import MyPosts from './MyPosts';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../../Redux/profileReducer';

function MyPostsContainer(props) {
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
            posts={props.store.getState().profilePage.postsData}
            newPostText={props.store.getState().profilePage.newPostText} />
    );
}

export default MyPostsContainer;