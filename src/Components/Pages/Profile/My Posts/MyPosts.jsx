/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts(props) {
    let postList = props.posts;

    // Отображение постов и их сортировка
    let postsElements = postList
        .map((el, i) => (<Post key={i} message={el.post} likesCount={el.likesCount} />));

    // Текстовая форма, связь с store
    let onAddPost = () => {
        props.addPost();
    }

    let newPostTextarea = props.postTextarea;

    let onTextareaChange = (e) => {
        let text = e.target.value;
        props.updateNewPostText(text);
    }

    return (
        <div>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        onChange={onTextareaChange}
                        value={newPostTextarea} />
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements.reverse()}
            </div>
        </div>
    );
}

export default MyPosts;