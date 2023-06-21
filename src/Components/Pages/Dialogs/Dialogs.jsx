/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';
import { useForm } from 'react-hook-form';

function Dialogs(props) {
    let dialogList = props.dialogs;
    let messageList = props.messages;

    // Отображение контактов и сообщений, а также их сортировка
    let dialogsElements = dialogList
        .map((el, i) => <DialogItem key={i} id={el.id} name={el.name} />);

    let messagesElements = messageList
        .map((el, i) => <MessageItem key={i} message={el.message} />);

    // Работа с Action'ами
    let sendMessage = (text, reset, defaultValues) => {
        props.addMessage(text);
        reset(defaultValues);
    }

    return (
        <div className={s.wrapper}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messagesItems}>
                {messagesElements}
                <div className={s.messageForm}>
                    <DialogForm sendMessage={sendMessage} />
                </div>
            </div>
        </div>
    );
}

function DialogForm(props) {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({});

    // Отправка формы при нажатии Enter
    const handleUserKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSubmit(data => props.sendMessage(data.textarea, reset, defaultValues))();
        }
    }

    const defaultValues = {
        textarea: ''
    }

    return (
        <>
            <form onSubmit={handleSubmit(data => props.sendMessage(data.textarea, reset, defaultValues))}>
                <div>
                    <textarea onKeyDown={handleUserKeyPress} placeholder='Enter your message here.' {...register('textarea', {
                        required: 'Textarea can not be empty.',
                        pattern: {
                            value: /^(?!\s*$).+/,
                            message: 'Non-correct value.'
                        },
                        minLength: {
                            value: 1,
                            message: ''
                        },
                        maxLength: {
                            value: 5000,
                            message: `Message cannot exceed 5000 characters`
                        }
                    })} />
                    {errors.textarea && <p>{errors.textarea?.message}</p>}
                </div>
                <div>
                    <input type='submit' />
                </div>
            </form>
        </>
    )
}

export default Dialogs;