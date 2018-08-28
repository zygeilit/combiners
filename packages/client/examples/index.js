import React from 'react';
import { render } from 'react-dom';
import ReactComponentTemplate from '../src';
import RootStore from '../src/stores/root'

import { Provider } from 'mobx-react';
const rootStore = new RootStore()
function start() {
    render(
        <Provider {...rootStore}>
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

