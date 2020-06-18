import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import Index from '@/pages'
import { Provider } from 'react-redux'
import { store } from './store'

ReactDOM.render(
    <Provider store={store}>
        <Index />
    </Provider>,
    document.getElementById('root')
);
