/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import MyPosts from './MyPosts';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../../Redux/profileReducer';
import StoreContext from '../../../../StoreContext';

function MyPostsContainer() {
    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState();
                let dispatch = store.dispatch;

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
                )
            }
            }
        </StoreContext.Consumer>
    );
}

export default MyPostsContainer;