/* eslint-disable jsx-a11y/alt-text */
import { addMessageActionCreator, updateNewDialogTextActionCreator } from '../../../Redux/dialogsReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        dialogTextarea: state.dialogsPage.dialogTextarea,
        dialogs: state.dialogsPage.dialogsData,
        messages: state.dialogsPage.messagesData
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => dispatch(addMessageActionCreator()),
        updateNewDialogText: (text) => dispatch(updateNewDialogTextActionCreator(text))
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;