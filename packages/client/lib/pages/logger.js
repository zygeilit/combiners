'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./logger.scss');

var _mobxReact = require('mobx-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Logger = (_dec = (0, _mobxReact.inject)('logStore'), _dec(_class = (0, _mobxReact.observer)(_class = function (_React$Component) {
    _inherits(Logger, _React$Component);

    function Logger() {
        _classCallCheck(this, Logger);

        return _possibleConstructorReturn(this, (Logger.__proto__ || Object.getPrototypeOf(Logger)).apply(this, arguments));
    }

    _createClass(Logger, [{
        key: 'render',
        value: function render() {
            var logStore = this.props.logStore;

            return _react2.default.createElement(
                'section',
                null,
                _react2.default.createElement('header', { className: 'logger-header' }),
                _react2.default.createElement(
                    'content',
                    { className: 'logger-conten' },
                    logStore.logs.map(function (log) {
                        return _react2.default.createElement(
                            'div',
                            { key: log.id },
                            log.status
                        );
                    })
                )
            );
        }
    }]);

    return Logger;
}(_react2.default.Component)) || _class) || _class);
exports.default = Logger;