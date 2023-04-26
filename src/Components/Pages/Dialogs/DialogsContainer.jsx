/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { addMessageActionCreator, updateNewDialogTextActionCreator } from '../../../Redux/dialogsReducer';
import Dialogs from './Dialogs';

function DialogsContainer(props) {
    let state = props.store.getState();
    
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
            newDialogText={state.dialogsPage.newDialogText}
            dialogs={state.dialogsPage.dialogsData}
            messages={state.dialogsPage.messagesData} />
    );
}

export default DialogsContainer;