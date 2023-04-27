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
    dialogTextarea: '',
};

const dialogsReducer = (state = initialState, action) => {
    let newState = {...state};
    newState.messagesData = [...state.messagesData];

    switch (action.type) {
        case 'ADD-MESSAGE':
            let newMessage = {
                id: 0,
                message: newState.dialogTextarea
            }

            if (newState.dialogTextarea !== '' && newState.dialogTextarea.length > 0) {
                newState.messagesData.push(newMessage);
                newState.dialogTextarea = '';
            }
            return newState;
        case 'UPDATE-NEW-MESSAGE-TEXT':
            newState.dialogTextarea = action.value;
            return newState;
        default:
            return newState;
    }
};

export const addMessageActionCreator = () => ({ type: 'ADD-MESSAGE' });
export const updateNewDialogTextActionCreator = (text) => ({ type: 'UPDATE-NEW-MESSAGE-TEXT', value: text });

export default dialogsReducer;