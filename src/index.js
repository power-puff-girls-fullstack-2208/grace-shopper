const React = require('react');
const ReactDOM = require('react-dom/client');
import App from './App';
import { Provider } from "react-redux";
import { store } from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <App/>
);
