import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './store'
import OtherTodoList from './OtherTodoList';

const App = (
    <Provider store={store}>
        <OtherTodoList/>
    </Provider>
)

ReactDOM.render(App, document.getElementById('root'));