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
    switch (action.type) {
        case 'ADD-MESSAGE':
            let text = state.dialogTextarea;

            return {
                ...state,
                messagesData: text.length > 0 ? [...state.messagesData, { id: 0, message: text }] : [...state.messagesData],
                dialogTextarea: ''
            };
        case 'UPDATE-NEW-MESSAGE-TEXT':
            return {
                ...state,
                dialogTextarea: action.value
            }
        default:
            return state;
    }
};

export const addMessage = () => ({ type: 'ADD-MESSAGE' });
export const updateNewDialogText = (text) => ({ type: 'UPDATE-NEW-MESSAGE-TEXT', value: text });

export default dialogsReducer;