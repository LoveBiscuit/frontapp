let store = {
    _state: {
        profilePage: {
            postsData: [
                { id: 1, post: 'Это моё первое сообщение!', likesCount: 4 },
                { id: 2, post: 'Вау! А это второе!', likesCount: 11 },
                { id: 3, post: 'hmmm...', likesCount: 8 },
                { id: 4, post: 'It\'s my first message!', likesCount: 5 }
            ],
            newPostText: '',
        },
        dialogsPage: {
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
        },
        friendsList: [
            { id: 1, name: 'Евгений' },
            { id: 2, name: 'Дмитрий' },
            { id: 3, name: 'Саша' },
            { id: 4, name: 'Максим' },
            { id: 5, name: 'Богдан' }
        ]
    },
    _callSubscriber() {
        console.log('State was changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer; // Загружаем функцию из index.js для повторного рендера
        this._callSubscriber(this);
    },
    
    addPost() {
        let newPost = {
            id: 5,
            post: this._state.profilePage.newPostText,
            likesCount: 0
        }

        if (this._state.newPostText !== '' && this._state.profilePage.newPostText.length > 2) {
            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this);
        }
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this);
    }
}

export default store;