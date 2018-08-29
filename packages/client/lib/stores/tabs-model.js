'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class, _descriptor, _descriptor2;

var _mobx = require('mobx');

var _projectModel = require('./project-model');

var _projectModel2 = _interopRequireDefault(_projectModel);

var _util = require('../util');

var Utils = _interopRequireWildcard(_util);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var ProjectStore = (_class = function () {
    function ProjectStore(id, name, regular) {
        var _this = this;

        _classCallCheck(this, ProjectStore);

        _initDefineProp(this, 'projects', _descriptor, this);

        _initDefineProp(this, 'addProject', _descriptor2, this);

        this.toJS = function () {
            return _this.projects.map(function (projects) {
                return projects.toJS();
            });
        };

        this.id = id;
        this.name = name;
        this.enabled = regular;
    }

    _createClass(ProjectStore, null, [{
        key: 'fromJS',
        value: function fromJS(object) {
            var id = object.id,
                name = object.name,
                regular = object.regular,
                projects = object.projects;

            var projectStore = new ProjectStore(id, name, regular);
            projectStore.projects = projects.map(function (item) {
                return new _projectModel2.default.fromJS(projectStore, item);
            });
            return projectStore;
        }
    }]);

    return ProjectStore;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'projects', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return [];
    }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'addProject', [_mobx.action], {
    enumerable: true,
    initializer: function initializer() {
        var _this2 = this;

        return function () {
            _this2.projects.push(new _projectModel2.default(_this2, Utils.uuid()));
        };
    }
})), _class);
exports.default = ProjectStore;