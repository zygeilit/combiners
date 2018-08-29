'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require('@material-ui/core/styles');

var _List = require('@material-ui/core/List');

var _List2 = _interopRequireDefault(_List);

var _ListItem = require('@material-ui/core/ListItem');

var _ListItem2 = _interopRequireDefault(_ListItem);

var _ListItemIcon = require('@material-ui/core/ListItemIcon');

var _ListItemIcon2 = _interopRequireDefault(_ListItemIcon);

var _Switch = require('@material-ui/core/Switch');

var _Switch2 = _interopRequireDefault(_Switch);

var _OndemandVideoTwoTone = require('@material-ui/icons/OndemandVideoTwoTone');

var _OndemandVideoTwoTone2 = _interopRequireDefault(_OndemandVideoTwoTone);

var _Input = require('@material-ui/core/Input');

var _Input2 = _interopRequireDefault(_Input);

var _DeleteTwoTone = require('@material-ui/icons/DeleteTwoTone');

var _DeleteTwoTone2 = _interopRequireDefault(_DeleteTwoTone);

var _IconButton = require('@material-ui/core/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _mobxReact = require('mobx-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = function styles(theme) {
    return {
        button: {
            marginLeft: 30,
            marginTop: 10
        },
        root: {
            backgroundColor: theme.palette.background.paper
        }
    };
};

var SwitchListSecondary = (0, _mobxReact.observer)(_class = function (_React$Component) {
    _inherits(SwitchListSecondary, _React$Component);

    function SwitchListSecondary() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, SwitchListSecondary);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SwitchListSecondary.__proto__ || Object.getPrototypeOf(SwitchListSecondary)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            checked: ['wifi']
        }, _this.handleToggle = function (value) {
            return function () {
                var checked = _this.state.checked;

                var currentIndex = checked.indexOf(value);
                var newChecked = [].concat(_toConsumableArray(checked));

                if (currentIndex === -1) {
                    newChecked.push(value);
                } else {
                    newChecked.splice(currentIndex, 1);
                }
                _this.setState({
                    checked: newChecked
                });
            };
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(SwitchListSecondary, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                classes = _props.classes,
                project = _props.project;
            var id = project.id,
                name = project.name,
                port = project.port,
                enabled = project.enabled;

            return _react2.default.createElement(
                _List2.default,
                { key: id, disablePadding: true },
                _react2.default.createElement(
                    _ListItem2.default,
                    null,
                    _react2.default.createElement(
                        _ListItemIcon2.default,
                        null,
                        _react2.default.createElement(_OndemandVideoTwoTone2.default, null)
                    ),
                    _react2.default.createElement(
                        _ListItemIcon2.default,
                        null,
                        _react2.default.createElement(_Switch2.default, {
                            onChange: project.toggle,
                            checked: enabled
                        })
                    ),
                    _react2.default.createElement(
                        _ListItemIcon2.default,
                        null,
                        _react2.default.createElement(_Input2.default, {
                            placeholder: '\u9879\u76EE\u540D\u79F0',
                            value: name,
                            onChange: project.setName
                            // className={classes.input}
                            , inputProps: {
                                'aria-label': 'Description'
                            }
                        })
                    ),
                    _react2.default.createElement(
                        _ListItemIcon2.default,
                        null,
                        _react2.default.createElement(_Input2.default, {
                            value: port,
                            placeholder: '\u7AEF\u53E3\u53F7',
                            onChange: project.setPort

                            // className={classes.input}
                            , inputProps: {
                                'aria-label': 'Description'
                            }
                        })
                    ),
                    _react2.default.createElement(
                        _ListItemIcon2.default,
                        null,
                        _react2.default.createElement(
                            _IconButton2.default,
                            { className: classes.button, 'aria-label': 'Delete' },
                            _react2.default.createElement(_DeleteTwoTone2.default, { onClick: project.destroy })
                        )
                    )
                )
            );
        }
    }]);

    return SwitchListSecondary;
}(_react2.default.Component)) || _class;

SwitchListSecondary.propTypes = {
    classes: _propTypes2.default.object.isRequired
};

exports.default = (0, _styles.withStyles)(styles)(SwitchListSecondary);