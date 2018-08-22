'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.homeTargetActions = undefined;

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
    var action = arguments[1];

    switch (action.type) {
        case _const.constTarget.CHANGE_TARGET_NAME:
            {
                return state.set('name', action.name);
            }
        case _const.constTarget.CHANAGE_TARGET_IP:
            {
                return state.set('ip', action.ip);
            }
    }
    return state;
};

var _immutable = require('immutable');

var _const = require('./const');

var initState = (0, _immutable.Map)({
    name: 'stnew03.beisen.com',
    ip: '60.28.207.67'
});

var homeTargetActions = exports.homeTargetActions = {
    changeTargetName: function changeTargetName(name) {
        return {
            type: _const.constTarget.CHANGE_TARGET_NAME,
            name: name
        };
    },
    changeTargetIP: function changeTargetIP(ip) {
        return {
            type: _const.constTarget.CHANAGE_TARGET_IP,
            ip: ip
        };
    }
};