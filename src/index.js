import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './Redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = (localState) => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App data={localState}
                    addPost={store.addPost.bind(store)}
                    updateNewPostText={store.updateNewPostText.bind(store)} />
            </BrowserRouter>
        </React.StrictMode>
    );
}

store.subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
