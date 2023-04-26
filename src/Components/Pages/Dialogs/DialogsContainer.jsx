/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { addMessageActionCreator, updateNewDialogTextActionCreator } from '../../../Redux/dialogsReducer';
import Dialogs from './Dialogs';

function DialogsContainer(props) {
    let state = props.store.getState();
    let dispatch = props.store.dispatch;

    let addMessage = () => {
        dispatch(addMessageActionCreator());
    }

    let onTextareaChange = (text) => {
        dispatch(updateNewDialogTextActionCreator(text));
    }

    return (
        <Dialogs
            updateNewDialogText={onTextareaChange}
            addMessage={addMessage}
            dialogTextarea={state.dialogsPage.dialogTextarea}
            dialogs={state.dialogsPage.dialogsData}
            messages={state.dialogsPage.messagesData} />
    );
}

export default DialogsContainer;