/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts(props) {
    // Текстовая форма, связь с store
    let onAddPost = () => {
        props.addPost();
    }

    let newPostTextarea = props.postTextarea;

    let onTextareaChange = (e) => {
        let text = e.target.value;
        props.updateNewPostText(text);
    }

    // Отображение постов и их сортировка
    let postsElements = props.postsData
        .map((p, id) => (<div className={s.post} key={id}>
            <Post message={p.post} likesCount={p.likesCount} />
        </div>
        ));

    return (
        <div>
            <div className={s.addPostArea}>
                <div>
                    <textarea className={s.postTextarea}
                        onChange={onTextareaChange}
                        value={newPostTextarea}
                    />
                </div>
                <div>
                    <button disabled={newPostTextarea.length < 3} className={s.postButton} onClick={onAddPost}>Добавить пост</button>
                </div>
            </div>
            <div className={s.postsArea}>
                {postsElements.reverse()}
            </div>
        </div>
    );
}

export default MyPosts;