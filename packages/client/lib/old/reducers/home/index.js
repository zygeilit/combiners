"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
    var action = arguments[1];

    switch (action.type) {
        case _const.constGlobal.GET_CONFIG_FROM_SERVER:
            {
                return state.merge(action.home);
            }
        case _const.constGlobal.SAVE_CONFIG_SUCCESS:
            {
                return state.set("status", action.status);
            }
        case _const.constGlobal.CLEAR_SAVING_STATUS:
            {
                return state.delete("status");
            }
        case _const.constGlobal.CHANGE_TAB:
            {
                return state.set("currentTab", action.tab);
            }
        case _const.constGlobal.ADD_GROUP:
            {
                var from = action.from;

                return state.updateIn(["groups", from], function (groups) {
                    groups = groups || (0, _immutable.List)();
                    return groups.push((0, _immutable.Map)(action.group));
                });
            }
        case _const.constGlobal.CHANAGE_GROUP_NAME:
            {
                var _from = action.from,
                    groupId = action.groupId,
                    name = action.name;

                return state.updateIn(['groups', _from], function (groups) {
                    var groupIndex = groups.findIndex(function (item) {
                        return item.get('id') === groupId;
                    });
                    return groups.setIn([groupIndex, 'name'], name);
                });
            }
        case _const.constGlobal.DELETE_GROUP:
            {
                var _from2 = action.from,
                    _groupId = action.groupId;

                return state.updateIn(['groups', _from2], function (groups) {
                    return groups.filter(function (group) {
                        return group.get('id') !== _groupId;
                    });
                }).update(_from2, function (fromItems) {
                    return fromItems.filter(function (item) {
                        return item.get('groupId') !== _groupId;
                    });
                });
            }
    }

    return (0, _combineImmutableReducers2.default)({
        special: _special2.default,
        target: _target2.default,
        talentui: _talentui2.default,
        pass: _pass2.default,
        direct: _direct2.default
    })(state, action);
};

var _combineImmutableReducers = require("@talentui/biz-helper/lib/utils/combineImmutableReducers");

var _combineImmutableReducers2 = _interopRequireDefault(_combineImmutableReducers);

var _immutable = require("immutable");

var _uuid = require("uuid");

var _const = require("./const");

var _special = require("./special");

var _special2 = _interopRequireDefault(_special);

var _target = require("./target");

var _target2 = _interopRequireDefault(_target);

var _talentui = require("./talentui");

var _talentui2 = _interopRequireDefault(_talentui);

var _pass = require("./pass");

var _pass2 = _interopRequireDefault(_pass);

var _direct = require("./direct");

var _direct2 = _interopRequireDefault(_direct);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initState = (0, _immutable.fromJS)({
    currentTab: "special",
    groups: {
        special: [{
            id: (0, _uuid.v1)(),
            name: "默认",
            type: "default"
        }]
    }
});