'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Typography = require('@material-ui/core/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

var _styles = require('@material-ui/core/styles');

var _Tabs = require('@material-ui/core/Tabs');

var _Tabs2 = _interopRequireDefault(_Tabs);

var _Tab = require('@material-ui/core/Tab');

var _Tab2 = _interopRequireDefault(_Tab);

var _checkboxList = require('../components/checkbox-list');

var _checkboxList2 = _interopRequireDefault(_checkboxList);

var _swiper = require('../components/swiper');

var _swiper2 = _interopRequireDefault(_swiper);

var _Grid = require('@material-ui/core/Grid');

var _Grid2 = _interopRequireDefault(_Grid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function PageContainer(_ref) {
  var children = _ref.children,
      dir = _ref.dir;

  return _react2.default.createElement(
    _Typography2.default,
    { component: 'div', dir: dir,
      style: { padding: 10 }
    },
    children
  );
}

var styles = function styles(theme) {
  return {
    root: {
      height: '100%',
      display: 'flex',
      width: '100%',
      position: 'absolute',
      flexGrow: 'row wrap',
      backgroundColor: theme.palette.background.paper
    },
    tabsRoot: {
      width: '100%',
      borderBottom: '1px solid #e8e8e8'
    },
    tabsIndicator: {
      backgroundColor: '#1890ff'
    },
    tabRoot: {
      textTransform: 'initial',
      minWidth: 72,
      fontWeight: theme.typography.fontWeightRegular,
      marginRight: theme.spacing.unit * 4,
      fontFamily: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"'].join(','),
      '&:hover': {
        color: '#40a9ff',
        opacity: 1
      },
      '&$tabSelected': {
        color: '#1890ff',
        fontWeight: theme.typography.fontWeightMedium
      },
      '&:focus': {
        color: '#40a9ff'
      }
    },
    tabSelected: {},
    typography: {
      padding: theme.spacing.unit * 3
    }
  };
};

var CustomizedTabs = function (_React$Component) {
  _inherits(CustomizedTabs, _React$Component);

  function CustomizedTabs() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, CustomizedTabs);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = CustomizedTabs.__proto__ || Object.getPrototypeOf(CustomizedTabs)).call.apply(_ref2, [this].concat(args))), _this), _this.state = {
      value: 0
    }, _this.handleChange = function (event, value) {
      _this.setState({ value: value });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CustomizedTabs, [{
    key: 'render',
    value: function render() {
      var classes = this.props.classes;
      var value = this.state.value;


      return _react2.default.createElement(
        _Grid2.default,
        {
          container: true,
          direction: 'row',
          justify: 'flex-start',
          alignItems: 'flex-start'
        },
        _react2.default.createElement(
          _Tabs2.default,
          {
            value: value,
            onChange: this.handleChange,
            classes: { root: classes.tabsRoot, indicator: classes.tabsIndicator }
          },
          _react2.default.createElement(_Tab2.default, {
            disableRipple: true,
            classes: { root: classes.tabRoot, selected: classes.tabSelected },
            label: 'Talent\u9879\u76EE'
          }),
          _react2.default.createElement(_Tab2.default, {
            disableRipple: true,
            classes: { root: classes.tabRoot, selected: classes.tabSelected },
            label: '\u6269\u5C55\u9879\u76EE'
          }),
          _react2.default.createElement(_Tab2.default, {
            disableRipple: true,
            classes: { root: classes.tabRoot, selected: classes.tabSelected },
            label: '\u81EA\u5B9A\u4E49\u9879\u76EE'
          })
        ),
        _react2.default.createElement(
          'content',
          { className: 'content' },
          _react2.default.createElement(
            _swiper2.default,
            this.state,
            _react2.default.createElement(
              PageContainer,
              null,
              _react2.default.createElement(_checkboxList2.default, null),
              ' '
            )
          )
        )
      );
    }
  }]);

  return CustomizedTabs;
}(_react2.default.Component);
// CustomizedTabs.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

exports.default = (0, _styles.withStyles)(styles)(CustomizedTabs);