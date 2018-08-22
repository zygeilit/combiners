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

var _global = require("&/reducers/home/global");

var _special = require("./config/special");

var _special2 = _interopRequireDefault(_special);

var _target = require("./config/target");

var _target2 = _interopRequireDefault(_target);

var _talentui = require("./config/talentui");

var _talentui2 = _interopRequireDefault(_talentui);

var _extension = require("./config/extension");

var _extension2 = _interopRequireDefault(_extension);

var _pass = require("./config/pass");

var _pass2 = _interopRequireDefault(_pass);

var _direct = require("./config/direct");

var _direct2 = _interopRequireDefault(_direct);

var _logger = require("./logger");

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var tabs = [{
    key: "remote",
    name: "服务器配置",
    module: _target2.default
}, {
    key: "extension",
    name: "扩展项目",
    module: _extension2.default
}, {
    key: "talentui",
    name: "Talent UI 项目",
    module: _talentui2.default
}, {
    key: "special",
    name: "代理",
    module: _special2.default
}, {
    key: "direct",
    name: "直配",
    module: _direct2.default
}, {
    key: "pass",
    name: "跳过",
    module: _pass2.default
}];

var tablogger = "logger";

var Home = (_dec = (0, _reactRedux.connect)(function (state) {
    return {
        currentTab: state.getIn(["home", "currentTab"] || "remote")
    };
}), _dec(_class = function (_Component) {
    _inherits(Home, _Component);

    function Home() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Home);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Home.__proto__ || Object.getPrototypeOf(Home)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            currentTab: "remote"
        }, _this.handleSwitchTab = function (tab) {
            return function () {
                _this.props.dispatch((0, _global.switchTab)(tab));
            };
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Home, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            this.props.dispatch((0, _global.getData)());
        }
    }, {
        key: "downloadCert",
        value: function downloadCert() {
            window.open("/api/download/cert");
        }
    }, {
        key: "renderTabItem",
        value: function renderTabItem(_ref2) {
            var key = _ref2.key,
                name = _ref2.name;
            var currentTab = this.props.currentTab;

            return _react2.default.createElement(
                "li",
                { key: key, className: "tab" + (currentTab === key ? " cur" : "") },
                _react2.default.createElement(
                    "a",
                    { href: "javascript:;", onClick: this.handleSwitchTab(key) },
                    name
                )
            );
        }
    }, {
        key: "renderTabs",
        value: function renderTabs() {
            var _this2 = this;

            return tabs.map(function (item) {
                return _this2.renderTabItem(item);
            });
        }
    }, {
        key: "renderModule",
        value: function renderModule() {
            var currentTab = this.props.currentTab;

            var tab = tabs.find(function (item) {
                return item.key === currentTab;
            });
            if (tab) return _react2.default.createElement(tab.module);
            return null;
        }
    }, {
        key: "render",
        value: function render() {
            var currentTab = this.props.currentTab;

            return _react2.default.createElement(
                "div",
                { className: "application" },
                _react2.default.createElement(
                    "ul",
                    { className: "tabs" },
                    this.renderTabs(),
                    this.renderTabItem({
                        key: tablogger,
                        name: "日志"
                    })
                ),
                this.renderModule(),
                _react2.default.createElement(_logger2.default, { show: currentTab === tablogger }),
                _react2.default.createElement(
                    "div",
                    { key: "download", className: "download-ssl" },
                    _react2.default.createElement(
                        "button",
                        { onClick: this.downloadCert, className: "download" },
                        "\u4E0B\u8F7Dssl\u8BC1\u4E66"
                    )
                )
            );
        }
    }]);

    return Home;
}(_react.Component)) || _class);
exports.default = Home;