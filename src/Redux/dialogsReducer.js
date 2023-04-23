const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_DIALOG_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 0,
                message: state.newDialogText
            }

            if (state.newDialogText !== '' && state.newDialogText.length > 2) {
                state.messagesData.push(newMessage);
                state.newDialogText = '';
            }
            break;
        case UPDATE_NEW_DIALOG_TEXT:
            state.newDialogText = action.value;
            break;
        default:
            break;
    }

    return state;
};

export default dialogsReducer;