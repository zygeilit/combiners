'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require('@material-ui/core/styles');

var _Button = require('@material-ui/core/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Add = require('@material-ui/icons/Add');

var _Add2 = _interopRequireDefault(_Add);

var _project = require('../project');

var _project2 = _interopRequireDefault(_project);

var _mobxReact = require('mobx-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = function styles(theme) {
    return {
        button: {
            marginLeft: 30,
            marginTop: 10
        },
        root: {
            backgroundColor: theme.palette.background.paper
        }
    };
};

var ProjectContainer = (0, _mobxReact.observer)(_class = function (_React$Component) {
    _inherits(ProjectContainer, _React$Component);

    function ProjectContainer() {
        _classCallCheck(this, ProjectContainer);

        return _possibleConstructorReturn(this, (ProjectContainer.__proto__ || Object.getPrototypeOf(ProjectContainer)).apply(this, arguments));
    }

    _createClass(ProjectContainer, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                classes = _props.classes,
                tab = _props.tab;

            console.log(tab);
            return _react2.default.createElement(
                'div',
                { className: classes.root },
                _react2.default.createElement(
                    _Button2.default,
                    { onClick: tab.addProject, variant: 'fab', mini: true, color: 'secondary', 'aria-label': 'Add', className: classes.button },
                    _react2.default.createElement(_Add2.default, null)
                ),
                tab.projects.map(function (item) {
                    return _react2.default.createElement(_project2.default, { key: item.id, project: item });
                })
            );
        }
    }]);

    return ProjectContainer;
}(_react2.default.Component)) || _class;

ProjectContainer.propTypes = {
    classes: _propTypes2.default.object.isRequired
};

exports.default = (0, _styles.withStyles)(styles)(ProjectContainer);