/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts(props) {
    // Отображение постов и их сортировка
    let postsData = props.data.getState().profilePage.postsData;
    let postsElements = postsData
        .map((el, i) => (<Post key={i} message={el.post} likesCount={el.likesCount} />));

    // Текстовая форма, связь с store
    let addPost = () => {
        props.addPost();
    }

    let newPostElement = React.createRef();
    let newPostText = props.data.getState().profilePage.newPostText;
    let onTextareaChange = () => {
        props.updateNewPostText(newPostElement.current.value);
    }

    return (
        <div>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} onChange={onTextareaChange} value={newPostText} />
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