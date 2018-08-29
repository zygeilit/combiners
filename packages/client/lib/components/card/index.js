'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require('@material-ui/core/styles');

var _Card = require('@material-ui/core/Card');

var _Card2 = _interopRequireDefault(_Card);

var _CardActions = require('@material-ui/core/CardActions');

var _CardActions2 = _interopRequireDefault(_CardActions);

var _CardContent = require('@material-ui/core/CardContent');

var _CardContent2 = _interopRequireDefault(_CardContent);

var _CardMedia = require('@material-ui/core/CardMedia');

var _CardMedia2 = _interopRequireDefault(_CardMedia);

var _Button = require('@material-ui/core/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Typography = require('@material-ui/core/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  card: {
    maxWidth: 345
  },
  media: {
    // ⚠️ object-fit is not supported by IE11.
    objectFit: 'cover'
  }
};

function ImgMediaCard(props) {
  var classes = props.classes;

  return _react2.default.createElement(
    _Card2.default,
    { className: classes.card },
    _react2.default.createElement(
      _CardContent2.default,
      null,
      _react2.default.createElement(
        _Typography2.default,
        { gutterBottom: true, variant: 'headline', component: 'h2' },
        'Talnet UI Dev Server'
      ),
      _react2.default.createElement(
        _Typography2.default,
        { component: 'p' },
        '\u62B9\u53BB\u7E41\u7410\u7684Nginx\u914D\u7F6E\u8FC7\u7A0B,\u5185\u7F6ETalentUI 2.0 / Cloud\u6269\u5C55\u6587\u4EF6\u8F6C\u53D1\u89C4\u5219,\u652F\u6301\u81EA\u5B9A\u4E49\u8F6C\u53D1\u89C4\u5219, \u4E00\u952E\u914D\u7F6EHttps\u73AF\u5883,\u65E0\u9700\u624B\u52A8\u751F\u6210\u8BC1\u4E66,\u652F\u6301\u591A\u7AD9\u70B9\u591A\u7AEF\u53E3\u540C\u65F6\u8C03\u8BD5\u3002'
      )
    ),
    _react2.default.createElement(
      _CardActions2.default,
      null,
      _react2.default.createElement(
        _Button2.default,
        { size: 'small', color: 'primary' },
        'Star'
      ),
      _react2.default.createElement(
        _Button2.default,
        { size: 'small', color: 'primary' },
        'Issue'
      )
    )
  );
}

ImgMediaCard.propTypes = {
  classes: _propTypes2.default.object.isRequired
};

exports.default = (0, _styles.withStyles)(styles)(ImgMediaCard);