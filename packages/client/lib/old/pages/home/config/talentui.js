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

var _talentui = require("&/reducers/home/talentui");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Talentui = (_dec = (0, _reactRedux.connect)(function (state) {
    return { data: state.getIn(["home", "talentui"]) };
}, (0, _easyImport.mapActionCreators)(_talentui.homeTalentuiActions)), _dec(_class = function (_Component) {
    _inherits(Talentui, _Component);

    function Talentui() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Talentui);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Talentui.__proto__ || Object.getPrototypeOf(Talentui)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            showTemplate: false
        }, _this.handleChangeTemplate = function (_ref2) {
            var target = _ref2.target;

            _this.props.changeTemplate(target.value);
        }, _this.handleChangeProjectName = function (projectId) {
            return function (_ref3) {
                var target = _ref3.target;

                _this.props.changeProjectName(target.value, projectId);
            };
        }, _this.handleChangeProjectPort = function (projectId) {
            return function (_ref4) {
                var target = _ref4.target;

                _this.props.changeProjectPort(target.value, projectId);
            };
        }, _this.handleAddProject = function () {
            _this.props.addProject();
        }, _this.handleChangeEnabled = function (projectId) {
            return function () {
                _this.props.toggleEnabled(projectId);
            };
        }, _this.handleDeleteProject = function (projectId) {
            return function () {
                _this.props.deleteTalentuiProject(projectId);
            };
        }, _this.toggleTemplate = function () {
            _this.setState({
                showTemplate: !_this.state.showTemplate
            });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Talentui, [{
        key: "renderProjectList",
        value: function renderProjectList() {
            var _this2 = this;

            var data = this.props.data;

            if (!data || !data.size || !data.get('projects').size) {
                return _react2.default.createElement(
                    "div",
                    { className: "no-config" },
                    "\u6728\u6709\u4EFB\u4F55\u914D\u7F6E"
                );
            }
            return data.get("projects").map(function (item) {
                var id = item.get("id");
                return _react2.default.createElement(
                    "div",
                    { key: id, className: "config-item" },
                    _react2.default.createElement("input", {
                        type: "checkbox",
                        className: "config-enabled",
                        checked: item.get("enabled") || false,
                        onChange: _this2.handleChangeEnabled(id)
                    }),
                    _react2.default.createElement("input", {
                        type: "text",
                        value: item.get("name"),
                        placeholder: "\u9879\u76EE\u76EE\u5F55",
                        onChange: _this2.handleChangeProjectName(id),
                        className: "config-input-left"
                    }),
                    " ",
                    "-",
                    _react2.default.createElement("input", {
                        type: "text",
                        value: item.get("port"),
                        placeholder: "\u672C\u5730\u7AEF\u53E3",
                        onChange: _this2.handleChangeProjectPort(id),
                        className: "config-input-left"
                    }),
                    _react2.default.createElement(
                        "button",
                        {
                            className: "delete",
                            onClick: _this2.handleDeleteProject(id)
                        },
                        "\u5220\u9664"
                    )
                );
            });
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "section",
                { className: "talentui-config config-section" },
                _react2.default.createElement(
                    "div",
                    { className: "server-action" },
                    _react2.default.createElement(
                        "button",
                        {
                            onClick: this.handleAddProject,
                            className: "btn-add-pink"
                        },
                        "\u6DFB\u52A0"
                    )
                ),
                _react2.default.createElement(
                    "div",
                    null,
                    this.renderProjectList()
                ),
                _react2.default.createElement(
                    "div",
                    {
                        className: "talentui-template",
                        style: {
                            display: this.state.showTemplate ? "block" : "none"
                        }
                    },
                    _react2.default.createElement("input", {
                        type: "text",
                        value: this.props.data.get("template"),
                        onChange: this.handleChangeTemplate,
                        placeholder: "\u914D\u7F6E\u6A21\u677F",
                        className: "config-input-right wide ipt-type-reg"
                    })
                ),
                _react2.default.createElement(
                    "div",
                    {
                        style: {
                            display: this.state.showTemplate ? "none" : "block"
                        }
                    },
                    _react2.default.createElement(
                        "a",
                        { href: "javascript:;", onClick: this.toggleTemplate },
                        "\u7F16\u8F91\u6A21\u677F"
                    )
                )
            );
        }
    }]);

    return Talentui;
}(_react.Component)) || _class);
exports.default = Talentui;