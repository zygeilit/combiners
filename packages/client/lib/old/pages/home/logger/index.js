"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _socket = require("socket.io-client");

var _socket2 = _interopRequireDefault(_socket);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var reg = /\D/;

var Logger = function (_Component) {
    _inherits(Logger, _Component);

    function Logger(p, c) {
        _classCallCheck(this, Logger);

        var _this = _possibleConstructorReturn(this, (Logger.__proto__ || Object.getPrototypeOf(Logger)).call(this, p, c));

        _this.state = {
            logs: [],
            len: 100
        };

        _this.changeLoggerLength = function (_ref) {
            var target = _ref.target;
            var value = target.value;

            if (!reg.test(value)) {
                _this.setState({
                    len: parseInt(value)
                });
            }
        };

        _this.socket = _this.initSocket();
        return _this;
    }

    _createClass(Logger, [{
        key: "initSocket",
        value: function initSocket() {
            var _this2 = this;

            var origin = window.location.origin;

            var socket = _socket2.default.connect(origin);
            socket.on("log", function (log) {
                _this2.setState({
                    logs: [log].concat(_toConsumableArray(_this2.state.logs.slice(0, _this2.state.len)))
                });
            });
            return socket;
        }
    }, {
        key: "renderLogs",
        value: function renderLogs() {
            return this.state.logs.map(function (log, index) {
                var type = log.type;

                if (type === "connect") {
                    return _react2.default.createElement(
                        "div",
                        { className: "log-connected log-content", key: log.id },
                        _react2.default.createElement(
                            "span",
                            { className: "log-line-num" },
                            index
                        ),
                        _react2.default.createElement(
                            "span",
                            { className: "c" },
                            log.decision
                        )
                    );
                } else if (type === "proxy") {
                    return _react2.default.createElement(
                        "div",
                        { className: "log-proxy log-content", key: log.id },
                        _react2.default.createElement(
                            "span",
                            { className: "log-line-num" },
                            index
                        ),
                        _react2.default.createElement(
                            "span",
                            null,
                            log.decision
                        ),
                        _react2.default.createElement(
                            "span",
                            { className: "log-label" },
                            "\u6807\u8BC6\uFF1A"
                        ),
                        _react2.default.createElement(
                            "span",
                            null,
                            log.identifier
                        ),
                        _react2.default.createElement(
                            "span",
                            { className: "log-label" },
                            "\u8BF7\u6C42\u8D44\u6E90\u8DEF\u5F84\uFF1A"
                        ),
                        _react2.default.createElement(
                            "span",
                            null,
                            log.requestPath
                        ),
                        _react2.default.createElement(
                            "span",
                            { className: "log-label" },
                            "\u5B9E\u9645\u54CD\u5E94\u5730\u5740\uFF1A"
                        ),
                        _react2.default.createElement(
                            "span",
                            null,
                            log.responseTarget + "/" + log.responsePath
                        )
                    );
                }
            });
        }
    }, {
        key: "render",
        value: function render() {
            var show = this.props.show;

            return _react2.default.createElement(
                "div",
                { style: { display: show ? "block" : "none" } },
                _react2.default.createElement(
                    "div",
                    null,
                    _react2.default.createElement(
                        "label",
                        null,
                        " \u65E5\u5FD7\u6700\u5927\u6570\u91CF\uFF1A",
                        _react2.default.createElement("input", {
                            type: "text",
                            value: this.state.len,
                            onChange: this.changeLoggerLength
                        })
                    )
                ),
                _react2.default.createElement("br", null),
                _react2.default.createElement(
                    "div",
                    { className: "logger" },
                    this.renderLogs()
                )
            );
        }
    }]);

    return Logger;
}(_react.Component);

exports.default = Logger;