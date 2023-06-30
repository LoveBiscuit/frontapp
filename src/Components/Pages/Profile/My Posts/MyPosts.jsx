/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = React.memo((props) => {
    // Отображение постов и их сортировка
    let postsElements = [...props.postsData]
        .reverse()
        .map((p, id) => (
            <div className={s.post} key={id}>
                <Post message={p.post} likesCount={p.likesCount} />
            </div>
        ));

    let addPost = (text, reset, defaultValues) => {
        props.addPost(text);
        reset(defaultValues);
    }

    return (
        <div>
            <div className={s.addPostArea}>
                <MyPostForm addPost={addPost} />
            </div>
            <div className={s.postsArea}>
                {postsElements}
            </div>
        </div>
    );
});

function MyPostForm(props) {
    const [valueCount, setCount] = useState(300);

    const {
        register,
        handleSubmit,
        reset,
        getValues,
        setError,
        formState: { errors },
    } = useForm({});

    const defaultValues = {
        textarea: "",
    };

    function testError(error) {
        setError('serverError', { type: 'custom', message: error })
    }

    // getValues().textarea.length 

    return (
        <>
            <form onChange={() => setCount(300 - getValues().textarea.length)}
                onSubmit={handleSubmit(data => {
                    props.addPost(data.textarea, reset, defaultValues);
                    setCount(300);
                })}>
                {errors.serverError && <p>{errors.serverError.message}</p>}
                <div>
                    <textarea className={s.postTextarea} {...register('textarea', {
                        required: 'Textarea is required',
                        pattern: {
                            value: /^(?!\s*$).+/,
                            message: 'Non-correct value.'
                        },
                        minLength: {
                            value: 3,
                            message: 'The number of characters cannot be less than 3'
                        },
                        maxLength: {
                            value: 300,
                            message: 'The number of characters cannot be more than 300'
                        }
                    })} />
                    {errors.textarea && <p>{errors.textarea.message}</p>}
                </div>
                <div>
                    {Math.sign(valueCount) !== -1 ? valueCount : 0}
                </div>
                <div>
                    <button
                        type="button"
                        onClick={() => testError('Серверный еррор')}>
                        Trigger Name Errors
                    </button>
                    <input className={s.postButton} type='submit' />
                </div>
            </form>
        </>
    )
}

export default MyPosts;