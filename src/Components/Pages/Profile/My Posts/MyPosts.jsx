/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import s from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts(props) {
    // Отображение постов и их сортировка
    let postsElements = props.postsData
        .map((p, id) => (<div className={s.post} key={id}>
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
                {postsElements.reverse()}
            </div>
        </div>
    );
}

function MyPostForm(props) {
    const [valueCount, setCount] = useState(0);

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
        setError('serverError', {type: 'custom', message: error})
    }



    return (
        <>
            <form onChange={() => setCount(getValues().textarea.length)} onSubmit={handleSubmit(data => props.addPost(data.textarea, reset, defaultValues))}>
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
                    {valueCount} / 300
                </div>
                <div>
                    <button
                        type="button"
                        onClick={() => testError('Серверный еррор')}>
                        Trigger Name Errors
                    </button>
                    <input onClick={() => setCount(0)} className={s.postButton} type='submit' />
                </div>
            </form>
        </>
    )
}

export default MyPosts;