const React = require('react');
const ReactDOM = require('react-dom/client');
import App from './App';
<<<<<<< HEAD
import { Provider } from 'react-redux';
import store from './store';
=======
import { Provider } from "react-redux";
import { store } from './store';
>>>>>>> main

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
<<<<<<< HEAD
    <Provider store={store}>
        <App/>
=======
    <Provider store = {store}>
    <App/>
>>>>>>> main
    </Provider>
);
