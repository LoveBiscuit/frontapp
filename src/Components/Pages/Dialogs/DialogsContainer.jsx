/* eslint-disable jsx-a11y/alt-text */
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { addMessage, updateNewDialogText } from './../../../Redux/dialogsReducer';

let mapStateToProps = (state) => {
    return {
        dialogTextarea: state.dialogsPage.dialogTextarea,
        dialogs: state.dialogsPage.dialogsData,
        messages: state.dialogsPage.messagesData
    }
}

const DialogsContainer = connect(mapStateToProps, {
    addMessage,
    updateNewDialogText
})(Dialogs);

export default DialogsContainer;