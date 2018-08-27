'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;
// import PropTypes from 'prop-types';

// immer
// import { observer } from 'mobx-react';


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

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

var _mobxReact = require('mobx-react');

var _mobxReactDevtools = require('mobx-react-devtools');

var _mobxReactDevtools2 = _interopRequireDefault(_mobxReactDevtools);

var _ImportantDevicesTwoTone = require('@material-ui/icons/ImportantDevicesTwoTone');

var _ImportantDevicesTwoTone2 = _interopRequireDefault(_ImportantDevicesTwoTone);

var _pages = require('./pages');

var _pages2 = _interopRequireDefault(_pages);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

var App = (_dec = (0, _mobxReact.inject)('viewStore'), _dec(_class = (0, _mobxReact.observer)(_class = function (_Component) {
    _inherits(App, _Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                classes = _props.classes,
                viewStore = _props.viewStore;

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
                        _react2.default.createElement(_menu.MainListItems, { handleChangeIndex: viewStore.changeIndex })
                    ),
                    _react2.default.createElement(_Divider2.default, null),
                    _react2.default.createElement(
                        _List2.default,
                        null,
                        _react2.default.createElement(_menu.OtherListItems, { handleChangeIndex: viewStore.changeIndex })
                    )
                ),
                _react2.default.createElement(
                    'main',
                    { className: classes.content },
                    _react2.default.createElement('div', { className: classes.toolbar }),
                    _react2.default.createElement(_pages2.default, { value: viewStore.activeMenu })
                )
            );
        }
    }]);

    return App;
}(_react.Component)) || _class) || _class);
exports.default = (0, _styles.withStyles)(styles)(App);