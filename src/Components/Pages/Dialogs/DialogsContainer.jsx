/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { addMessageActionCreator, updateNewDialogTextActionCreator } from '../../../Redux/dialogsReducer';
import Dialogs from './Dialogs';

function DialogsContainer(props) {
    let sendMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    }

    let onTextareaChange = (text) => {
        props.store.dispatch(updateNewDialogTextActionCreator(text));
    }

    return (
        <Dialogs
            updateNewDialogText={onTextareaChange}
            addMessage={sendMessage}
            newDialogText={props.store.getState().dialogsPage.newDialogText}
            dialogs={props.store.getState().dialogsPage.dialogsData}
            messages={props.store.getState().dialogsPage.messagesData} />
    );
}

export default DialogsContainer;