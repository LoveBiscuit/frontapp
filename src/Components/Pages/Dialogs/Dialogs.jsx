/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';
import { addMessageActionCreator, updateNewDialogTextActionCreator } from '../../../Redux/store';

function Dialogs(props) {
    let dialogsData = props.data.dialogsPage.dialogsData;
    let messagesData = props.data.dialogsPage.messagesData;
    let dialogsElements = dialogsData
        .map((el, i) => <DialogItem key={i} id={el.id} name={el.name} />);

    let messagesElements = messagesData
        .map((el, i) => <MessageItem key={i} message={el.message} />);

    let sendMessage = () => {
        props.dispatch(addMessageActionCreator());
    }

    let newDialogElement = React.createRef();
    let newDialogText = props.data.dialogsPage.newDialogText;
    let onTextareaChange = () => {
        let text = newDialogElement.current.value;
        props.dispatch(updateNewDialogTextActionCreator(text));
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
                        <textarea ref={newDialogElement} onChange={onTextareaChange} value={newDialogText}></textarea>
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