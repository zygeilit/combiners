"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getData = getData;
exports.deleteGroup = deleteGroup;
exports.switchTab = switchTab;
exports.clearSaveStatus = clearSaveStatus;

var _immutable = require("immutable");

var _const = require("./const");

var _uuid = require("uuid");

function getData() {
    return function (dispatch) {
        fetch("/api/get").then(function (res) {
            return res.json();
        }).then(function (config) {
            dispatch({
                type: _const.constGlobal.GET_CONFIG_FROM_SERVER,
                home: (0, _immutable.fromJS)(config),
                noSave: true
            });
        });
    };
}

function deleteGroup(id) {
    return {
        type: _const.constGlobal.DELETE_GROUP,
        id: id
    };
}

function switchTab(tab) {
    return {
        type: _const.constGlobal.CHANGE_TAB,
        tab: tab
    };
}

function clearSaveStatus() {
    return { type: _const.constGlobal.CLEAR_SAVING_STATUS };
}

// 未匹配到请求要发送的地址