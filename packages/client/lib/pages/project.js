'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

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

var _mobxReact = require('mobx-react');

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
                color: '#1890ff'
                //   fontWeight: theme.typography.fontWeightMedium,
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

var CustomizedTabs = (_dec = (0, _mobxReact.inject)('allTabsStore'), _dec(_class = (0, _mobxReact.observer)(_class = function (_React$Component) {
    _inherits(CustomizedTabs, _React$Component);

    function CustomizedTabs() {
        _classCallCheck(this, CustomizedTabs);

        return _possibleConstructorReturn(this, (CustomizedTabs.__proto__ || Object.getPrototypeOf(CustomizedTabs)).apply(this, arguments));
    }

    _createClass(CustomizedTabs, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                classes = _props.classes,
                allTabsStore = _props.allTabsStore;
            var tabs = allTabsStore.tabs,
                activeTab = allTabsStore.activeTab,
                changeIndex = allTabsStore.changeIndex;

            return _react2.default.createElement(
                _Grid2.default,
                {
                    container: true,
                    direction: 'row',
                    justify: 'flex-start',
                    alignItems: 'flex-start' },
                _react2.default.createElement(
                    _Tabs2.default,
                    {
                        value: activeTab,
                        onChange: changeIndex,
                        classes: { root: classes.tabsRoot, indicator: classes.tabsIndicator } },
                    tabs.map(function (tab) {
                        return _react2.default.createElement(_Tab2.default, {
                            disableRipple: true,
                            key: tab.id,
                            classes: { root: classes.tabRoot, selected: classes.tabSelected },
                            label: tab.name
                        });
                    })
                ),
                _react2.default.createElement(
                    'content',
                    { className: 'content' },
                    _react2.default.createElement(
                        _swiper2.default,
                        { value: activeTab },
                        tabs.map(function (tab) {
                            return _react2.default.createElement(
                                PageContainer,
                                { key: tab.id },
                                _react2.default.createElement(_checkboxList2.default, { tab: tab }),
                                ' '
                            );
                        })
                    )
                )
            );
        }
    }]);

    return CustomizedTabs;
}(_react2.default.Component)) || _class) || _class);
// CustomizedTabs.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

exports.default = (0, _styles.withStyles)(styles)(CustomizedTabs);