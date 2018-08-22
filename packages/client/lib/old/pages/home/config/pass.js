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

var _pass = require("&/reducers/home/pass");

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
    }
};

var Pass = (_dec = (0, _reactRedux.connect)(function (state) {
    return { data: state.getIn(["home", "pass"]) };
}, (0, _easyImport.mapActionCreators)(_pass.actions)), _dec(_class = function (_Component) {
    _inherits(Pass, _Component);

    function Pass() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Pass);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Pass.__proto__ || Object.getPrototypeOf(Pass)).call.apply(_ref, [this].concat(args))), _this), _this.handleToggleEnabled = function (passId) {
            return function () {
                _this.props.toggleEnabled(passId);
            };
        }, _this.handleChangeReg = function (passId) {
            return function (_ref2) {
                var target = _ref2.target;

                _this.props.changePassReg(passId, target.value);
            };
        }, _this.handleDeleteConfig = function (passId) {
            return function () {
                _this.props.deletePass(passId);
            };
        }, _this.handleAddPass = function () {
            _this.props.addPass();
        }, _this.handleChangeName = function (passId) {
            return function (_ref3) {
                var target = _ref3.target;

                _this.props.changeName(passId, target.value);
            };
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Pass, [{
        key: "renderPassList",
        value: function renderPassList() {
            var _this2 = this;

            var data = this.props.data;

            if (!data || !data.size) {
                return _react2.default.createElement(
                    "tr",
                    null,
                    _react2.default.createElement(
                        "td",
                        { colSpan: "4", className: "no-config" },
                        "\u6728\u6709\u4EFB\u4F55\u914D\u7F6E"
                    )
                );
            }
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
                            placeholder: "\u914D\u7F6E\u540D\u79F0"
                        })
                    ),
                    _react2.default.createElement(
                        "td",
                        null,
                        _react2.default.createElement("input", { className: "ipt-type-str",
                            type: "text",
                            value: item.get("reg"),
                            onChange: _this2.handleChangeReg(id),
                            placeholder: "\u914D\u7F6E\u8DEF\u5F84"
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
                { className: "pass-config config-section" },
                _react2.default.createElement(
                    "div",
                    { className: "server-action" },
                    _react2.default.createElement(
                        "button",
                        {
                            onClick: this.handleAddPass,
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
                                "\u8BF7\u6C42\u5730\u5740"
                            ),
                            _react2.default.createElement(
                                "th",
                                { style: tableWidth.t3 },
                                "\u64CD\u4F5C"
                            )
                        )
                    ),
                    _react2.default.createElement(
                        "tbody",
                        null,
                        this.renderPassList()
                    )
                )
            );
        }
    }]);

    return Pass;
}(_react.Component)) || _class);
exports.default = Pass;