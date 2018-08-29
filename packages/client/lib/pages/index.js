'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactSwipeableViews = require('react-swipeable-views');

var _reactSwipeableViews2 = _interopRequireDefault(_reactSwipeableViews);

var _Typography = require('@material-ui/core/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

var _project = require('./project');

var _project2 = _interopRequireDefault(_project);

var _general = require('./general');

var _general2 = _interopRequireDefault(_general);

var _whiteList = require('./white-list');

var _whiteList2 = _interopRequireDefault(_whiteList);

var _logger = require('./logger');

var _logger2 = _interopRequireDefault(_logger);

var _about = require('./about');

var _about2 = _interopRequireDefault(_about);

var _domain = require('./domain');

var _domain2 = _interopRequireDefault(_domain);

var _custom = require('./custom');

var _custom2 = _interopRequireDefault(_custom);

var _swiper = require('../components/swiper');

var _swiper2 = _interopRequireDefault(_swiper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
    slideContainer: {
        height: '100%'
    }
};

function PageContainer(_ref) {
    var children = _ref.children,
        dir = _ref.dir;

    return _react2.default.createElement(
        _Typography2.default,
        { component: 'div', dir: dir,
            style: { paddingLeft: 10 }
        },
        children
    );
}

var Content = function (_React$Component) {
    _inherits(Content, _React$Component);

    function Content() {
        _classCallCheck(this, Content);

        return _possibleConstructorReturn(this, (Content.__proto__ || Object.getPrototypeOf(Content)).apply(this, arguments));
    }

    _createClass(Content, [{
        key: 'render',
        value: function render() {
            // const { value } = this.props;
            return _react2.default.createElement(
                _swiper2.default,
                this.props,
                _react2.default.createElement(
                    PageContainer,
                    null,
                    ' ',
                    _react2.default.createElement(_project2.default, null),
                    ' '
                ),
                _react2.default.createElement(
                    PageContainer,
                    null,
                    ' ',
                    _react2.default.createElement(_general2.default, null),
                    ' '
                ),
                _react2.default.createElement(
                    PageContainer,
                    null,
                    ' ',
                    _react2.default.createElement(_whiteList2.default, null),
                    ' '
                ),
                _react2.default.createElement(
                    PageContainer,
                    null,
                    ' ',
                    _react2.default.createElement(_custom2.default, null),
                    ' '
                ),
                _react2.default.createElement(
                    PageContainer,
                    null,
                    ' ',
                    _react2.default.createElement(_domain2.default, null),
                    ' '
                ),
                _react2.default.createElement(
                    PageContainer,
                    null,
                    ' ',
                    _react2.default.createElement(_logger2.default, null),
                    ' '
                ),
                _react2.default.createElement(
                    PageContainer,
                    null,
                    ' ',
                    _react2.default.createElement(_about2.default, null),
                    ' '
                )
            );
        }
    }]);

    return Content;
}(_react2.default.Component);

exports.default = Content;