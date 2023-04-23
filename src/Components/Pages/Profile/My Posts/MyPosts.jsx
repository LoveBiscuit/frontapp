/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../../Redux/store';

function MyPosts(props) {
    // Отображение постов и их сортировка
    let postsData = props.data.profilePage.postsData;
    let postsElements = postsData
        .map((el, i) => (<Post key={i} message={el.post} likesCount={el.likesCount} />));

    // Текстовая форма, связь с store
    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let newPostText = props.data.profilePage.newPostText;
    let onTextareaChange = (e) => {
        let text = e.target.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    }

    return (
        <div>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        onChange={onTextareaChange}
                        value={newPostText} />
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements.reverse()}
            </div>
        </div>
    );
}

export default MyPosts;