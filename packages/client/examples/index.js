import React from 'react';
import { render } from 'react-dom';
import ReactComponentTemplate from '../src';
import RootStore from '../src/stores'

import { Provider } from 'mobx-react';
const rootStore = new RootStore()
rootStore.initializeFromServer()

function start() {
    render(
        <Provider rootStore = {rootStore}>
            <ReactComponentTemplate />
        </Provider>,
        document.getElementById('root'));
}

// if (process.env.NODE_ENV !== 'production') {
//     const { whyDidYouUpdate } = require('why-did-you-update');
//     whyDidYouUpdate(React);
// }

start();

if (module.hot) start();

