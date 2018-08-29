'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _card = require('../components/card');

var _card2 = _interopRequireDefault(_card);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import './logger.scss'
// import { inject, observer } from 'mobx-react';
// @inject('loggerStore')
// @observer'


var About = function (_React$Component) {
    _inherits(About, _React$Component);

    function About() {
        _classCallCheck(this, About);

        return _possibleConstructorReturn(this, (About.__proto__ || Object.getPrototypeOf(About)).apply(this, arguments));
    }

    _createClass(About, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'section',
                null,
                _react2.default.createElement('header', { className: 'about-header' }),
                _react2.default.createElement(
                    'content',
                    { className: 'about-conten' },
                    '\u62B9\u53BB\u7E41\u7410\u7684Nginx\u914D\u7F6E\u8FC7\u7A0B,\u5185\u7F6ETalentUI 2.0 / Cloud\u6269\u5C55\u6587\u4EF6\u8F6C\u53D1\u89C4\u5219,\u652F\u6301\u81EA\u5B9A\u4E49\u8F6C\u53D1\u89C4\u5219, \u4E00\u952E\u914D\u7F6EHttps\u73AF\u5883,\u65E0\u9700\u624B\u52A8\u751F\u6210\u8BC1\u4E66,\u652F\u6301\u591A\u7AD9\u70B9\u591A\u7AEF\u53E3\u540C\u65F6\u8C03\u8BD5\u3002'
                ),
                _react2.default.createElement(
                    'footer',
                    null,
                    '\bTalent UI 2.0 \u5F3A\u529B\u9A71\u52A8'
                )
            );
        }
    }]);

    return About;
}(_react2.default.Component);

exports.default = About;