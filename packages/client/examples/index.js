import React from 'react';
import { render } from 'react-dom';
import ReactComponentTemplate from '../src';
import io from 'socket.io-client';

// sockets
// const socket = io.connect('http://localhost');
// socket.on('connect', message => console.log('%c    Socket 连接成功    ', 'background:#2ecc71;color:#fff'));
// socket.on('log', message => console.log(`%c   ${JSON.stringify(message)}   `, 'background:#cc712e;color:#fff'));
function start() {
    render(<ReactComponentTemplate />, document.getElementById('root'));
}

if (process.env.NODE_ENV !== 'production') {
  const {whyDidYouUpdate} = require('why-did-you-update');
  whyDidYouUpdate(React);
}


start();

if (module.hot) start();

