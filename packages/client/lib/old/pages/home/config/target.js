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

var _target = require("&/reducers/home/target");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Target = (_dec = (0, _reactRedux.connect)(function (state) {
    return { data: state.getIn(["home", "target"]) };
}, (0, _easyImport.mapActionCreators)(_target.homeTargetActions)), _dec(_class = function (_Component) {
    _inherits(Target, _Component);

    function Target() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Target);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Target.__proto__ || Object.getPrototypeOf(Target)).call.apply(_ref, [this].concat(args))), _this), _this.handleChangeName = function (_ref2) {
            var target = _ref2.target;
            var changeTargetName = _this.props.changeTargetName;

            changeTargetName(target.value);
        }, _this.handleChangeIP = function (_ref3) {
            var target = _ref3.target;
            var changeTargetIP = _this.props.changeTargetIP;

            changeTargetIP(target.value);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Target, [{
        key: "render",
        value: function render() {
            var data = this.props.data;

            return _react2.default.createElement(
                "section",
                { className: "target-config config-section" },
                _react2.default.createElement(
                    "div",
                    { className: "i" },
                    _react2.default.createElement(
                        "label",
                        null,
                        "\u4EE3\u7406\u5730\u5740\uFF1A"
                    ),
                    _react2.default.createElement("input", {
                        type: "text",
                        value: data.get("name"),
                        onChange: this.handleChangeName
                    })
                ),
                _react2.default.createElement(
                    "div",
                    { className: "i" },
                    _react2.default.createElement(
                        "label",
                        null,
                        "\u516C\u7F51IP\uFF1A"
                    ),
                    _react2.default.createElement("input", {
                        type: "text",
                        value: data.get("ip"),
                        onChange: this.handleChangeIP
                    })
                )
            );
        }
    }]);

    return Target;
}(_react.Component)) || _class);
exports.default = Target;