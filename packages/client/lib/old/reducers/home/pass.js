"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.actions = undefined;

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
    var action = arguments[1];

    var passIndex = void 0;
    var passId = action.passId;

    if (passId) passIndex = state.findIndex(function (item) {
        return item.get("id") === passId;
    });
    switch (action.type) {
        case _const.constPass.ADD_PASS_CONFIG:
            {
                return state.push(action.pass);
            }
        case _const.constPass.CHANAGE_PASS_REG:
            {
                return state.setIn([passIndex, "reg"], action.reg);
            }
        case _const.constPass.DELETE_PASS_CONFIG:
            {
                var _passId = action.passId;

                return state.filter(function (item) {
                    return item.get("id") !== _passId;
                });
            }
        case _const.constPass.TOGGLE_PASS_ENABLED:
            {
                var path = [passIndex, "enabled"];
                return state.setIn(path, !state.getIn(path));
            }
        case _const.constPass.CHANGE_PASS_NAME:
            {
                var _path = [passIndex, "name"];
                return state.setIn(_path, action.name);
            }
    }
    return state;
};

var _immutable = require("immutable");

var _const = require("./const");

var _uuid = require("uuid");

var initState = (0, _immutable.List)([]);

var actions = exports.actions = {
    addPass: function addPass() {
        return {
            type: _const.constPass.ADD_PASS_CONFIG,
            pass: (0, _immutable.fromJS)({
                id: (0, _uuid.v1)(),
                reg: ""
            })
        };
    },
    deletePass: function deletePass(passId) {
        return {
            type: _const.constPass.DELETE_PASS_CONFIG,
            passId: passId
        };
    },
    changePassReg: function changePassReg(passId, reg) {
        return {
            type: _const.constPass.CHANAGE_PASS_REG,
            passId: passId,
            reg: reg
        };
    },
    toggleEnabled: function toggleEnabled(passId) {
        return {
            type: _const.constPass.TOGGLE_PASS_ENABLED,
            passId: passId
        };
    },
    changeName: function changeName(passId, name) {
        return {
            type: _const.constPass.CHANGE_PASS_NAME,
            passId: passId,
            name: name
        };
    }
};