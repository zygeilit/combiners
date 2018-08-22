'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _home = require('./home');

var _home2 = _interopRequireDefault(_home);

var _combineImmutableReducers = require('@talentui/biz-helper/lib/utils/combineImmutableReducers');

var _combineImmutableReducers2 = _interopRequireDefault(_combineImmutableReducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _combineImmutableReducers2.default)({
    home: _home2.default
});