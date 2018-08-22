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

var _Drawer = require('@material-ui/core/Drawer');

var _Drawer2 = _interopRequireDefault(_Drawer);

var _AppBar = require('@material-ui/core/AppBar');

var _AppBar2 = _interopRequireDefault(_AppBar);

var _Toolbar = require('@material-ui/core/Toolbar');

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _List = require('@material-ui/core/List');

var _List2 = _interopRequireDefault(_List);

var _Typography = require('@material-ui/core/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

var _Divider = require('@material-ui/core/Divider');

var _Divider2 = _interopRequireDefault(_Divider);

var _menu = require('./components/menu');

require('normalize.css');

var _tab = require('./components/tab');

var _tab2 = _interopRequireDefault(_tab);

var _ImportantDevicesTwoTone = require('@material-ui/icons/ImportantDevicesTwoTone');

var _ImportantDevicesTwoTone2 = _interopRequireDefault(_ImportantDevicesTwoTone);

var _reactSwipeableViews = require('react-swipeable-views');

var _reactSwipeableViews2 = _interopRequireDefault(_reactSwipeableViews);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function TabContainer(_ref) {
  var children = _ref.children,
      dir = _ref.dir;

  return _react2.default.createElement(
    _Typography2.default,
    { component: 'div', dir: dir, style: { padding: 8 * 3 } },
    children
  );
}

TabContainer.propTypes = {
  children: _propTypes2.default.node.isRequired,
  dir: _propTypes2.default.string.isRequired
};
// const styles = theme => ({
//   root: {
//     backgroundColor: theme.palette.background.paper,
//     width: 500,
//   },
// });
var drawerWidth = 220;

var styles = function styles(theme) {
  return {
    root: {
      zIndex: 1,
      overflow: 'hidden',
      display: 'flex',
      position: 'absolute',
      height: '100%',
      width: '100%'
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      background: 'linear-gradient(45deg, #2196f3 30%, #21cbf3 90%)',
      boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .30)'
    },
    drawerPaper: {
      width: drawerWidth,
      flexGrow: 1,
      display: 'flex'

    },
    content: {
      marginLeft: 220,
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      paddingTop: 10,
      minWidth: 0 // So the Typography noWrap works
    },
    title: {
      fontWeight: 300,
      marginLeft: 20
    },
    toolbar: theme.mixins.toolbar
  };
};

var ClippedDrawer = function (_PureComponent) {
  _inherits(ClippedDrawer, _PureComponent);

  function ClippedDrawer() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, ClippedDrawer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = ClippedDrawer.__proto__ || Object.getPrototypeOf(ClippedDrawer)).call.apply(_ref2, [this].concat(args))), _this), _this.state = {
      value: 0
    }, _this.handleChange = function (event, value) {
      _this.setState({ value: value });
    }, _this.handleChangeIndex = function (index) {

      _this.setState({ value: index });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ClippedDrawer, [{
    key: 'render',
    value: function render() {
      var classes = this.props.classes;

      return _react2.default.createElement(
        'div',
        { className: classes.root },
        _react2.default.createElement(
          _AppBar2.default,
          { position: 'absolute', className: classes.appBar },
          _react2.default.createElement(
            _Toolbar2.default,
            null,
            _react2.default.createElement(_ImportantDevicesTwoTone2.default, null),
            _react2.default.createElement(
              _Typography2.default,
              {
                classes: {
                  title: classes.title
                },
                variant: 'title', color: 'inherit', noWrap: true },
              'TalentUI Dev Server'
            )
          )
        ),
        _react2.default.createElement(
          _Drawer2.default,
          {
            variant: 'permanent',
            classes: {
              paper: classes.drawerPaper
            } },
          _react2.default.createElement('div', { className: classes.toolbar }),
          _react2.default.createElement(
            _List2.default,
            null,
            _react2.default.createElement(_menu.MainListItems, { handleChangeIndex: this.handleChangeIndex })
          ),
          _react2.default.createElement(_Divider2.default, null),
          _react2.default.createElement(
            _List2.default,
            null,
            _react2.default.createElement(_menu.OtherListItems, { handleChangeIndex: this.handleChangeIndex })
          )
        ),
        _react2.default.createElement(
          'main',
          { className: classes.content },
          _react2.default.createElement('div', { className: classes.toolbar }),
          _react2.default.createElement(
            _reactSwipeableViews2.default
            // axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            ,
            { index: this.state.value,
              onChangeIndex: this.handleChangeIndex
            },
            _react2.default.createElement(
              TabContainer,
              { dir: theme.direction },
              'Item One'
            ),
            _react2.default.createElement(
              TabContainer,
              { dir: theme.direction },
              'Item Two'
            ),
            _react2.default.createElement(
              TabContainer,
              { dir: theme.direction },
              'Item Three'
            )
          ),
          _react2.default.createElement(_tab2.default, null)
        )
      );
    }
  }]);

  return ClippedDrawer;
}(_react.PureComponent);

exports.default = (0, _styles.withStyles)(styles)(ClippedDrawer);