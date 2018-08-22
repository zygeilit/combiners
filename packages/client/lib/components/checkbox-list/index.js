'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require('@material-ui/core/styles');

var _List = require('@material-ui/core/List');

var _List2 = _interopRequireDefault(_List);

var _ListItem = require('@material-ui/core/ListItem');

var _ListItem2 = _interopRequireDefault(_ListItem);

var _ListItemSecondaryAction = require('@material-ui/core/ListItemSecondaryAction');

var _ListItemSecondaryAction2 = _interopRequireDefault(_ListItemSecondaryAction);

var _ListItemText = require('@material-ui/core/ListItemText');

var _ListItemText2 = _interopRequireDefault(_ListItemText);

var _Checkbox = require('@material-ui/core/Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _IconButton = require('@material-ui/core/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Comment = require('@material-ui/icons/Comment');

var _Comment2 = _interopRequireDefault(_Comment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = function styles(theme) {
  return {
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper
    }
  };
};

var CheckboxList = function (_React$Component) {
  _inherits(CheckboxList, _React$Component);

  function CheckboxList() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, CheckboxList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CheckboxList.__proto__ || Object.getPrototypeOf(CheckboxList)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      checked: [0]
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

  _createClass(CheckboxList, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var classes = this.props.classes;


      return _react2.default.createElement(
        'div',
        { className: classes.root },
        _react2.default.createElement(
          _List2.default,
          null,
          [0, 1, 2, 3].map(function (value) {
            return _react2.default.createElement(
              _ListItem2.default,
              {
                key: value,
                role: undefined,
                dense: true,
                button: true,
                onClick: _this2.handleToggle(value),
                className: classes.listItem
              },
              _react2.default.createElement(_Checkbox2.default, {
                checked: _this2.state.checked.indexOf(value) !== -1,
                tabIndex: -1,
                disableRipple: true
              }),
              _react2.default.createElement(_ListItemText2.default, { primary: 'Line item ' + (value + 1) }),
              _react2.default.createElement(
                _ListItemSecondaryAction2.default,
                null,
                _react2.default.createElement(
                  _IconButton2.default,
                  { 'aria-label': 'Comments' },
                  _react2.default.createElement(_Comment2.default, null)
                )
              )
            );
          })
        )
      );
    }
  }]);

  return CheckboxList;
}(_react2.default.Component);

CheckboxList.propTypes = {
  classes: _propTypes2.default.object.isRequired
};

exports.default = (0, _styles.withStyles)(styles)(CheckboxList);