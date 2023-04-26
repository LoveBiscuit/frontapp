/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';

function Dialogs(props) {
    let dialogList = props.dialogs;
    let messageList = props.messages;

    // Отображение контактов и сообщений, а также их сортировка
    let dialogsElements = dialogList
        .map((el, i) => <DialogItem key={i} id={el.id} name={el.name} />);

    let messagesElements = messageList
        .map((el, i) => <MessageItem key={i} message={el.message} />);

    // Если мы нажимаем Enter, сообщение отправляется
    let onEnterPress = (e) => {
        if (e.keyCode === 13 && e.shiftKey === false) {
            e.preventDefault();
            sendMessage();
        }
    }

    // Работа с Action'ами
    let sendMessage = () => {
        props.addMessage();
    }

    let newDialogTextarea = props.dialogTextarea;
    
    let onTextareaChange = (e) => {
        let text = e.target.value;
        props.updateNewDialogText(text);
    }

    return (
        <div className={s.wrapper}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messagesItems}>
                {messagesElements}
                <div className={s.messageForm}>
                    <div>
                        <textarea
                            onChange={onTextareaChange}
                            value={newDialogTextarea}
                            onKeyDown={onEnterPress}
                            placeholder='Enter your message here.'
                        />
                    </div>
                    <div>
                        <button onClick={sendMessage}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;