const ADD_MESSAGE = '/frontapp/dialogs/ADD_MESSAGE';

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
    ]
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messagesData: [...state.messagesData, { id: 0, message: action.text }]
            }
        default:
            return state;
    }
};

export const addMessage = (text) => ({ type: '/frontapp/dialogs/ADD_MESSAGE', text });

export default dialogsReducer;