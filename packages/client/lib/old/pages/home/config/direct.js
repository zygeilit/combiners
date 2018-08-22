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

var _direct = require("&/reducers/home/direct.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var tableWidth = {
    t1: {
        width: "40px"
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

var Direct = (_dec = (0, _reactRedux.connect)(function (state) {
    return { data: state.getIn(["home", "direct"]) };
}, (0, _easyImport.mapActionCreators)(_direct.actions)), _dec(_class = function (_Component) {
    _inherits(Direct, _Component);

    function Direct() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Direct);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Direct.__proto__ || Object.getPrototypeOf(Direct)).call.apply(_ref, [this].concat(args))), _this), _this.handleAddGlobal = function () {
            var addDirect = _this.props.addDirect;

            addDirect();
        }, _this.handleChangeReg = function (directId) {
            return function (_ref2) {
                var target = _ref2.target;
                var changeReg = _this.props.changeReg;

                changeReg(directId, target.value);
            };
        }, _this.handleChangeName = function (directId) {
            return function (_ref3) {
                var target = _ref3.target;
                var changeName = _this.props.changeName;

                changeName(directId, target.value);
            };
        }, _this.handleChangeTarget = function (directId) {
            return function (_ref4) {
                var target = _ref4.target;

                _this.props.changeTarget(directId, target.value);
            };
        }, _this.handleDeleteConfig = function (directId) {
            return function () {
                _this.props.deleteDirect(directId);
            };
        }, _this.handleToggleEnabled = function (directId) {
            return function () {
                _this.props.toggleEnabled(directId);
            };
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Direct, [{
        key: "renderConfigList",
        value: function renderConfigList() {
            var _this2 = this;

            if (!this.props.data || !this.props.data.size) return _react2.default.createElement(
                "tr",
                null,
                _react2.default.createElement(
                    "td",
                    { colSpan: "5", className: "no-config" },
                    "\u8FD8\u6728\u6709\u4EFB\u4F55\u914D\u7F6E"
                )
            );
            return this.props.data.map(function (item) {
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
                            placeholder: "\u540D\u79F0,\u65B9\u4FBF\u4F60\u533A\u5206\u914D\u7F6E"
                        })
                    ),
                    _react2.default.createElement(
                        "td",
                        null,
                        _react2.default.createElement("input", { className: "ipt-type-str",
                            type: "text",
                            value: item.get("reg"),
                            onChange: _this2.handleChangeReg(id),
                            placeholder: "requrest url"
                        })
                    ),
                    _react2.default.createElement(
                        "td",
                        null,
                        _react2.default.createElement("input", {
                            type: "text",
                            value: item.get("target"),
                            onChange: _this2.handleChangeTarget(id),
                            placeholder: "\u6DFB\u52A0\u534F\u8BAE\u4F7F\u7528\u8FDC\u7A0B\u5730\u5740\uFF0C\u4E0D\u6DFB\u52A0\u4F7F\u7528\u672C\u5730\u6587\u4EF6"
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
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "section",
                { className: "direct-config config-section" },
                _react2.default.createElement(
                    "div",
                    { className: "server-action" },
                    _react2.default.createElement(
                        "button",
                        {
                            onClick: this.handleAddGlobal,
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
                            _react2.default.createElement("th", { style: tableWidth.t1 }),
                            _react2.default.createElement(
                                "th",
                                { style: tableWidth.t2 },
                                "\u6807\u8BC6"
                            ),
                            _react2.default.createElement(
                                "th",
                                null,
                                "Request URL"
                            ),
                            _react2.default.createElement(
                                "th",
                                null,
                                "\u76EE\u6807"
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
                        this.renderConfigList()
                    )
                )
            );
        }
    }]);

    return Direct;
}(_react.Component)) || _class);
exports.default = Direct;