'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxLogger = require('redux-logger');

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

var _saveMiddleare = require('./helpers/save-middleare');

var _saveMiddleare2 = _interopRequireDefault(_saveMiddleare);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    el: 'talentuiDevServer',
    middlewares: [_saveMiddleare2.default, _reduxThunk2.default]
};