/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { addMessageActionCreator, updateNewDialogTextActionCreator } from '../../../Redux/dialogsReducer';
import Dialogs from './Dialogs';
import StoreContext from '../../../StoreContext';

function DialogsContainer() {
    return (
        <StoreContext.Consumer> 
            {(store) => {
                let state = store.getState();
                let dispatch = store.dispatch;

                let addMessage = () => {
                    dispatch(addMessageActionCreator());
                }

                let onTextareaChange = (text) => {
                    dispatch(updateNewDialogTextActionCreator(text));
                }

                return (
                    <Dialogs
                        addMessage={addMessage}
                        updateNewDialogText={onTextareaChange}
                        dialogTextarea={state.dialogsPage.dialogTextarea}
                        dialogs={state.dialogsPage.dialogsData}
                        messages={state.dialogsPage.messagesData} />
                )
            }
        }
        </StoreContext.Consumer>
    );
}

export default DialogsContainer;