"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.homeSpecialActions = undefined;

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
    var action = arguments[1];

    var specialIndex = void 0;
    var specialId = action.specialId;

    if (specialId) specialIndex = state.findIndex(function (item) {
        return item.get("id") === specialId;
    });
    switch (action.type) {
        case _const.constSpecial.ADD_A_SPECIAL:
            {
                return state.push((0, _immutable.fromJS)(action.config));
            }

        case _const.constSpecial.CHANGE_SPECIAL_REG:
            {
                var reg = action.reg;

                return state.setIn([specialIndex, "reg"], reg);
            }

        case _const.constSpecial.CHANGE_SPECIAL_NAME:
            {
                var name = action.name;

                return state.setIn([specialIndex, "name"], name);
            }
        case _const.constSpecial.CHANGE_SPECIAL_PORT:
            {
                var port = action.port;

                return state.setIn([specialIndex, "port"], port);
            }
        case _const.constSpecial.CHANAGE_SPECIAL_REFERER:
            {
                var referer = action.referer;

                return state.setIn([specialIndex, "referer"], referer);
            }
        case _const.constSpecial.DELETE_A_SPECIAL:
            {
                return state.filter(function (item) {
                    return item.get("id") !== action.specialId;
                });
            }
        case _const.constSpecial.TOGGLE_SPECIAL_ENABLED:
            {
                var path = [specialIndex, "enabled"];
                return state.setIn(path, !state.getIn(path));
            }
        case _const.constSpecial.TOGGLE_GROUP_ITEM_ENABLED:
            {
                var groupId = action.groupId,
                    groupIsDefault = action.groupIsDefault,
                    checked = action.checked;

                return state.map(function (item) {
                    var itemGroupId = item.get("groupId");
                    if (itemGroupId && itemGroupId === groupId || !itemGroupId && groupIsDefault) {
                        return item.set("enabled", checked);
                    }
                    return item;
                });
            }
    }

    return state;
};

var _uuid = require("uuid");

var _immutable = require("immutable");

var _const = require("./const");

var homeSpecialActions = exports.homeSpecialActions = {
    addSpecial: function addSpecial(groupId) {
        return {
            type: _const.constSpecial.ADD_A_SPECIAL,
            config: {
                port: "",
                name: "",
                id: (0, _uuid.v1)(),
                reg: "",
                referer: "",
                groupId: groupId
            }
        };
    },
    addGroup: function addGroup() {
        return {
            type: _const.constGlobal.ADD_GROUP,
            from: "special",
            group: {
                id: (0, _uuid.v1)(),
                name: "新的组"
            }
        };
    },
    deleteGroup: function deleteGroup(groupId) {
        return {
            type: _const.constGlobal.DELETE_GROUP,
            from: "special",
            groupId: groupId
        };
    },
    changeGroupName: function changeGroupName(groupId, name) {
        return {
            type: _const.constGlobal.CHANAGE_GROUP_NAME,
            from: "special",
            groupId: groupId,
            name: name
        };
    },
    changeSpecialName: function changeSpecialName(name, specialId) {
        return { type: _const.constSpecial.CHANGE_SPECIAL_NAME, name: name, specialId: specialId };
    },
    changeSpecialReg: function changeSpecialReg(reg, specialId) {
        return { type: _const.constSpecial.CHANGE_SPECIAL_REG, reg: reg, specialId: specialId };
    },
    changeSpecialPort: function changeSpecialPort(port, specialId) {
        return { type: _const.constSpecial.CHANGE_SPECIAL_PORT, port: port, specialId: specialId };
    },
    changeSpecialReferer: function changeSpecialReferer(referer, specialId) {
        return {
            type: _const.constSpecial.CHANAGE_SPECIAL_REFERER,
            referer: referer,
            specialId: specialId
        };
    },
    deleteSpecialConfig: function deleteSpecialConfig(specialId) {
        return { type: _const.constSpecial.DELETE_A_SPECIAL, specialId: specialId };
    },
    toggleEnabled: function toggleEnabled(specialId) {
        return {
            type: _const.constSpecial.TOGGLE_SPECIAL_ENABLED,
            specialId: specialId
        };
    },
    toggleGroupEnabled: function toggleGroupEnabled(groupId, groupIsDefault, checked) {
        return {
            type: _const.constSpecial.TOGGLE_GROUP_ITEM_ENABLED,
            groupId: groupId,
            groupIsDefault: groupIsDefault,
            checked: checked
        };
    }
};

var initState = (0, _immutable.List)([]);