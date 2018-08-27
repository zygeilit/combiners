'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.OtherListItems = exports.MainListItems = exports.ListRender = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ListItem = require('@material-ui/core/ListItem');

var _ListItem2 = _interopRequireDefault(_ListItem);

var _ListItemIcon = require('@material-ui/core/ListItemIcon');

var _ListItemIcon2 = _interopRequireDefault(_ListItemIcon);

var _ListItemText = require('@material-ui/core/ListItemText');

var _ListItemText2 = _interopRequireDefault(_ListItemText);

var _PersonalVideoTwoTone = require('@material-ui/icons/PersonalVideoTwoTone');

var _PersonalVideoTwoTone2 = _interopRequireDefault(_PersonalVideoTwoTone);

var _InfoTwoTone = require('@material-ui/icons/InfoTwoTone');

var _InfoTwoTone2 = _interopRequireDefault(_InfoTwoTone);

var _PaletteTwoTone = require('@material-ui/icons/PaletteTwoTone');

var _PaletteTwoTone2 = _interopRequireDefault(_PaletteTwoTone);

var _WbSunnyTwoTone = require('@material-ui/icons/WbSunnyTwoTone');

var _WbSunnyTwoTone2 = _interopRequireDefault(_WbSunnyTwoTone);

var _SecurityTwoTone = require('@material-ui/icons/SecurityTwoTone');

var _SecurityTwoTone2 = _interopRequireDefault(_SecurityTwoTone);

var _WebAssetTwoTone = require('@material-ui/icons/WebAssetTwoTone');

var _WebAssetTwoTone2 = _interopRequireDefault(_WebAssetTwoTone);

var _PublicTwoTone = require('@material-ui/icons/PublicTwoTone');

var _PublicTwoTone2 = _interopRequireDefault(_PublicTwoTone);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mainList = [{
    id: 0,
    primary: '所有项目',
    icon: _PersonalVideoTwoTone2.default
}, {
    id: 1,
    primary: '通用规则',
    icon: _WbSunnyTwoTone2.default
}, {
    id: 2,
    primary: '白名单',
    icon: _SecurityTwoTone2.default
}, {
    id: 3,
    primary: '自定义',
    icon: _PaletteTwoTone2.default
}, {
    id: 4,
    primary: '域名设置',
    icon: _PublicTwoTone2.default
}];
var otherList = [{
    id: 5,
    primary: '日志',
    icon: _WebAssetTwoTone2.default
}, {
    id: 6,
    primary: '关于',
    icon: _InfoTwoTone2.default
}];

var ListRender = exports.ListRender = function (_PureComponent) {
    _inherits(ListRender, _PureComponent);

    function ListRender() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, ListRender);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ListRender.__proto__ || Object.getPrototypeOf(ListRender)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function (id) {
            return function () {
                return _this.props.handleClick(id);
            };
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(ListRender, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                null,
                this.props.list.map(function (key) {
                    return _react2.default.createElement(
                        _ListItem2.default,
                        { onClick: _this2.handleClick(key.id), key: key.id, button: true },
                        _react2.default.createElement(
                            _ListItemIcon2.default,
                            null,
                            _react2.default.createElement(key.icon, null)
                        ),
                        _react2.default.createElement(_ListItemText2.default, { primary: key.primary })
                    );
                })
            );
        }
    }]);

    return ListRender;
}(_react.PureComponent);

var MainListItems = exports.MainListItems = function (_PureComponent2) {
    _inherits(MainListItems, _PureComponent2);

    function MainListItems() {
        _classCallCheck(this, MainListItems);

        return _possibleConstructorReturn(this, (MainListItems.__proto__ || Object.getPrototypeOf(MainListItems)).apply(this, arguments));
    }

    _createClass(MainListItems, [{
        key: 'render',
        value: function render() {
            var handleChangeIndex = this.props.handleChangeIndex;

            return _react2.default.createElement(ListRender, { handleClick: handleChangeIndex, list: mainList });
        }
    }]);

    return MainListItems;
}(_react.PureComponent);

var OtherListItems = exports.OtherListItems = function (_PureComponent3) {
    _inherits(OtherListItems, _PureComponent3);

    function OtherListItems() {
        _classCallCheck(this, OtherListItems);

        return _possibleConstructorReturn(this, (OtherListItems.__proto__ || Object.getPrototypeOf(OtherListItems)).apply(this, arguments));
    }

    _createClass(OtherListItems, [{
        key: 'render',
        value: function render() {
            var handleChangeIndex = this.props.handleChangeIndex;

            return _react2.default.createElement(ListRender, { handleClick: handleChangeIndex, list: otherList });
        }
    }]);

    return OtherListItems;
}(_react.PureComponent);