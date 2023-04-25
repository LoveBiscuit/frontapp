/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';

function Dialogs(props) {
    let dialogsData = props.dialogs;
    let messagesData = props.messages;
    let dialogsElements = dialogsData
        .map((el, i) => <DialogItem key={i} id={el.id} name={el.name} />);

    let messagesElements = messagesData
        .map((el, i) => <MessageItem key={i} message={el.message} />);

    let onEnterPress = (e) => {
        if (e.keyCode === 13 && e.shiftKey === false) {
            e.preventDefault();
            sendMessage();
        }
    }

    let sendMessage = () => {
        props.addMessage();
    }

    let newDialogText = props.newDialogText;
    
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
                            value={newDialogText}
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