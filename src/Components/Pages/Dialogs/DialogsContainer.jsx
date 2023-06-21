/* eslint-disable jsx-a11y/alt-text */
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { addMessage } from './../../../Redux/dialogsReducer';
import withAuthRedirect from '../../../HOC/withAuthRedirect';
import { compose } from '@reduxjs/toolkit';

function mapStateToProps (state) {
    return {
        dialogTextarea: state.dialogsPage.dialogTextarea,
        dialogs: state.dialogsPage.dialogsData,
        messages: state.dialogsPage.messagesData
    }
}

const mapDispatchToProps = {
        addMessage
}

const DialogsContainer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);

export default DialogsContainer;