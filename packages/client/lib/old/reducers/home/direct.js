"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.actions = undefined;

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
    var action = arguments[1];

    var directIndex = void 0;
    var directId = action.directId;

    if (directId) directIndex = state.findIndex(function (item) {
        return item.get("id") === directId;
    });

    switch (action.type) {
        case _const.constDirect.ADD_DIRECT_CONFIG:
            {
                return state.push((0, _immutable.fromJS)(action.direct));
            }
        case _const.constDirect.DELETE_DIRECT_CONFIG:
            {
                return state.filter(function (item) {
                    return item.get("id") !== directId;
                });
            }
        case _const.constDirect.TOGGLE_DIRECT_ENABLED:
            {
                var path = [directIndex, 'enabled'];
                return state.setIn(path, !state.getIn(path));
            }
        case _const.constDirect.CHANGE_DIRECT_NAME:
            {
                var _path = [directIndex, 'name'];
                return state.setIn(_path, action.name);
            }
        case _const.constDirect.CHANAGE_DIRECT_REG:
            {
                var _path2 = [directIndex, 'reg'];
                return state.setIn(_path2, action.reg);
            }
        case _const.constDirect.CHANGE_DIRECT_TARGET:
            {
                var _path3 = [directIndex, 'target'];
                return state.setIn(_path3, action.target);
            }
    }
    return state;
};

var _const = require("./const");

var _immutable = require("immutable");

var _uuid = require("uuid");

var actions = exports.actions = {
    addDirect: function addDirect() {
        return {
            type: _const.constDirect.ADD_DIRECT_CONFIG,
            direct: {
                id: (0, _uuid.v1)(),
                name: "",
                reg: "",
                target: "",
                enabled: false
            }
        };
    },
    deleteDirect: function deleteDirect(directId) {
        return {
            type: _const.constDirect.DELETE_DIRECT_CONFIG,
            directId: directId
        };
    },
    toggleEnabled: function toggleEnabled(directId) {
        return { type: _const.constDirect.TOGGLE_DIRECT_ENABLED, directId: directId };
    },
    changeReg: function changeReg(directId, reg) {
        return {
            type: _const.constDirect.CHANAGE_DIRECT_REG,
            directId: directId,
            reg: reg
        };
    },
    changeName: function changeName(directId, name) {
        return {
            type: _const.constDirect.CHANGE_DIRECT_NAME,
            directId: directId,
            name: name
        };
    },
    changeTarget: function changeTarget(directId, target) {
        return {
            type: _const.constDirect.CHANGE_DIRECT_TARGET,
            directId: directId,
            target: target
        };
    }
};

var initState = (0, _immutable.List)([]);