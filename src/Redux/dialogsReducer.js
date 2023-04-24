let initialState = {
    dialogsData: [
        { id: 1, name: 'Adam' },
        { id: 2, name: 'Андрей' },
        { id: 3, name: 'Светлана' },
        { id: 4, name: 'Павел' },
        { id: 5, name: 'Юля' },
        { id: 6, name: 'Дмитрий' },
        { id: 7, name: 'Stephan' }
    ],
    messagesData: [
        { id: 1, message: 'Привет! Как дела?' },
        { id: 2, message: 'Wazzzup!' },
        { id: 3, message: 'Идёшь сегодня на вечеринку?' },
        { id: 4, message: 'Эмм... Да' },
        { id: 5, message: 'Ну как там с деньгами?' }
    ],
    newDialogText: '',
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            let newMessage = {
                id: 0, 
                message: state.newDialogText
            }

            if (state.newDialogText !== '' && state.newDialogText.length > 2) {
                state.messagesData.push(newMessage);
                state.newDialogText = '';
            }
            return state;
        case 'UPDATE-NEW-MESSAGE-TEXT':
            state.newDialogText = action.value;
            return state;
            // return {...state, newDialogText: action.value};
        default:
            return state;
    }
};

export const addMessageActionCreator = () => ({ type: 'ADD-MESSAGE' });
export const updateNewDialogTextActionCreator = (text) => ({ type: 'UPDATE-NEW-MESSAGE-TEXT', value: text });

export default dialogsReducer;