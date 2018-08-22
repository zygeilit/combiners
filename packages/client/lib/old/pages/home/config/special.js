"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require("react-redux");

var _easyImport = require("&/helpers/easy-import");

var _special = require("&/reducers/home/special");

var _global = require("&/reducers/home/global");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var tableWidth = {
    t1: {
        width: "30px"
    },
    t2: {
        width: "80px"
    },
    t3: {
        width: "80px"
    },
    t4: {
        width: "120px"
    },
    t5: {
        width: "20px"
    },
    t6: {
        width: "200px"
    },
    t7: {
        width: "70px"
    }
};

var Special = (_dec = (0, _reactRedux.connect)(function (state) {
    return {
        specialData: state.getIn(["home", "special"]),
        groupData: state.getIn(["home", "groups", "special"])
    };
}, (0, _easyImport.mapActionCreators)(_special.homeSpecialActions)), _dec(_class = function (_Component) {
    _inherits(Special, _Component);

    function Special() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Special);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Special.__proto__ || Object.getPrototypeOf(Special)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            currentEdit: ""
        }, _this.handleAddSpecial = function (groupId) {
            return function () {
                var addSpecial = _this.props.addSpecial;

                addSpecial(groupId);
            };
        }, _this.handleChangeReg = function (specialId) {
            return function (_ref2) {
                var target = _ref2.target;
                var changeSpecialReg = _this.props.changeSpecialReg;

                changeSpecialReg(target.value, specialId);
            };
        }, _this.handleChangeName = function (specialId) {
            return function (_ref3) {
                var target = _ref3.target;
                var changeSpecialName = _this.props.changeSpecialName;

                changeSpecialName(target.value, specialId);
            };
        }, _this.handleChangePort = function (specialId) {
            return function (_ref4) {
                var target = _ref4.target;

                _this.props.changeSpecialPort(target.value, specialId);
            };
        }, _this.handleChangeReferer = function (specialId) {
            return function (_ref5) {
                var target = _ref5.target;

                _this.props.changeSpecialReferer(target.value, specialId);
            };
        }, _this.handleDeleteConfig = function (specialId) {
            return function () {
                _this.props.deleteSpecialConfig(specialId);
            };
        }, _this.handleToggleEnabled = function (specialId) {
            return function () {
                _this.props.toggleEnabled(specialId);
            };
        }, _this.handleChangeDirectMatch = function (specialId) {
            return function (_ref6) {
                var target = _ref6.target;

                _this.props.changeSpecialDirectMatch(target.value, specialId);
            };
        }, _this.handleAddGroup = function () {
            _this.props.addGroup();
        }, _this.handleChangeGroupName = function (groupId) {
            return function (_ref7) {
                var target = _ref7.target;

                _this.props.changeGroupName(groupId, target.value);
            };
        }, _this.handleDeleteGroup = function (groupId) {
            return function () {
                _this.props.deleteGroup(groupId);
            };
        }, _this.handleToggleGroupEnabled = function (groupId, groupIsDefault) {
            return function (_ref8) {
                var target = _ref8.target;

                _this.props.toggleGroupEnabled(groupId, groupIsDefault, target.checked);
            };
        }, _this.setCurrentEdit = function (groupId) {
            return function () {
                _this.setState({
                    currentEdit: groupId
                });
            };
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Special, [{
        key: "getGroupItem",
        value: function getGroupItem(group) {
            var specialData = this.props.specialData;

            var groupType = group.get("type");
            var groupId = group.get("id");
            return specialData.filter(function (special) {
                var fromGroupId = special.get("groupId");
                if (fromGroupId) {
                    return groupId === fromGroupId;
                } else {
                    return groupType === "default";
                }
            });
        }
    }, {
        key: "renderItem",
        value: function renderItem(groupItems) {
            var _this2 = this;

            if (!groupItems || !groupItems.size) {
                return _react2.default.createElement(
                    "tr",
                    null,
                    _react2.default.createElement(
                        "td",
                        { colSpan: "6", className: "no-config" },
                        "\u6728\u6709\u4EFB\u4F55\u914D\u7F6E"
                    )
                );
            }
            return groupItems.map(function (item) {
                var id = item.get("id");
                return _react2.default.createElement(
                    "tr",
                    { key: id, className: "config-item" },
                    _react2.default.createElement(
                        "td",
                        null,
                        _react2.default.createElement("input", {
                            type: "checkbox",
                            className: "config-enbaled",
                            checked: item.get("enabled") || false,
                            onChange: _this2.handleToggleEnabled(id)
                        })
                    ),
                    _react2.default.createElement(
                        "td",
                        null,
                        _react2.default.createElement("input", {
                            type: "text",
                            value: item.get("name"),
                            onChange: _this2.handleChangeName(id),
                            placeholder: "\u914D\u7F6E\u540D\u79F0"
                        })
                    ),
                    _react2.default.createElement(
                        "td",
                        null,
                        _react2.default.createElement("input", {
                            type: "text",
                            value: item.get("port"),
                            onChange: _this2.handleChangePort(id),
                            placeholder: "\u7AEF\u53E3\u53F7"
                        })
                    ),
                    _react2.default.createElement(
                        "td",
                        null,
                        _react2.default.createElement("input", {
                            className: "ipt-type-reg",
                            type: "text",
                            value: item.get("reg"),
                            onChange: _this2.handleChangeReg(id),
                            placeholder: "\u914D\u7F6E\u89C4\u5219"
                        })
                    ),
                    _react2.default.createElement(
                        "td",
                        null,
                        _react2.default.createElement("input", {
                            type: "text",
                            value: item.get("referer"),
                            onChange: _this2.handleChangeReferer(id),
                            placeholder: "\u5F15\u7528\u5730\u5740"
                        })
                    ),
                    _react2.default.createElement(
                        "td",
                        null,
                        _react2.default.createElement(
                            "button",
                            {
                                className: "delete",
                                onClick: _this2.handleDeleteConfig(id)
                            },
                            "\u5220\u9664"
                        )
                    )
                );
            });
        }
    }, {
        key: "renderGroup",
        value: function renderGroup() {
            var _this3 = this;

            var groupData = this.props.groupData;

            return groupData.map(function (group) {
                var id = group.get("id");
                var groupIsDefault = group.get("type") === "default";
                var groupItems = _this3.getGroupItem(group);
                var itemUnabledIndex = groupItems.findIndex(function (item) {
                    return item.get("enabled") !== true;
                });
                var elIptName = _react2.default.createElement("input", {
                    value: group.get("name"),
                    readOnly: _this3.state.currentEdit !== id
                });
                if (!groupIsDefault) {
                    elIptName = _react2.default.cloneElement(elIptName, {
                        onDoubleClick: _this3.setCurrentEdit(id),
                        onBlur: _this3.setCurrentEdit(""),
                        onChange: _this3.handleChangeGroupName(id)
                    });
                }
                return _react2.default.createElement(
                    "div",
                    { key: id },
                    _react2.default.createElement(
                        "h2",
                        { className: "group-action" },
                        elIptName,
                        group.get("type") !== "default" && _react2.default.createElement(
                            "a",
                            {
                                href: "javascript:;",
                                onClick: _this3.handleDeleteGroup(id)
                            },
                            "\u5220\u9664"
                        )
                    ),
                    _react2.default.createElement(
                        "section",
                        { className: "special-config config-section" },
                        _react2.default.createElement(
                            "div",
                            { className: "server-action" },
                            _react2.default.createElement(
                                "button",
                                {
                                    onClick: _this3.handleAddSpecial(id),
                                    className: "btn-add-pink"
                                },
                                "\u6DFB\u52A0"
                            )
                        ),
                        _react2.default.createElement(
                            "table",
                            null,
                            _react2.default.createElement(
                                "thead",
                                null,
                                _react2.default.createElement(
                                    "tr",
                                    null,
                                    _react2.default.createElement(
                                        "th",
                                        { style: tableWidth.t1 },
                                        _react2.default.createElement("input", {
                                            type: "checkbox",
                                            checked: groupItems.size > 0 && itemUnabledIndex === -1,
                                            onChange: _this3.handleToggleGroupEnabled(id, groupIsDefault)
                                        })
                                    ),
                                    _react2.default.createElement(
                                        "th",
                                        { style: tableWidth.t2 },
                                        "\u6807\u8BC6"
                                    ),
                                    _react2.default.createElement(
                                        "th",
                                        { style: tableWidth.t3 },
                                        "\u7AEF\u53E3"
                                    ),
                                    _react2.default.createElement(
                                        "th",
                                        null,
                                        "\u89C4\u5219"
                                    ),
                                    _react2.default.createElement(
                                        "th",
                                        { style: tableWidth.t4 },
                                        "\u5F15\u7528\u5730\u5740\u8FC7\u6EE4"
                                    ),
                                    _react2.default.createElement(
                                        "th",
                                        { style: tableWidth.t7 },
                                        "\u64CD\u4F5C"
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                "tbody",
                                null,
                                _this3.renderItem(groupItems)
                            )
                        )
                    )
                );
            });
        }
    }, {
        key: "render",
        value: function render() {
            var elAddGroup = _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                    "button",
                    { className: "btn-add-group", onClick: this.handleAddGroup },
                    "\u6DFB\u52A0\u5206\u7EC4"
                )
            );

            return _react2.default.createElement(
                "div",
                { className: "group-box" },
                elAddGroup,
                this.renderGroup()
            );
        }
    }]);

    return Special;
}(_react.Component)) || _class);
exports.default = Special;