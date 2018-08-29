'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;

var _mobx = require('mobx');

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

var ProjectModel = (_class = function () {
    function ProjectModel(store, id) {
        var name = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
        var port = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 3000;
        var enabled = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

        _classCallCheck(this, ProjectModel);

        _initDefineProp(this, 'name', _descriptor, this);

        _initDefineProp(this, 'port', _descriptor2, this);

        _initDefineProp(this, 'enabled', _descriptor3, this);

        _initDefineProp(this, 'toggle', _descriptor4, this);

        _initDefineProp(this, 'destroy', _descriptor5, this);

        _initDefineProp(this, 'setPort', _descriptor6, this);

        _initDefineProp(this, 'setName', _descriptor7, this);

        this.store = store;
        this.id = id;
        this.port = port;
        this.name = name;
        this.store = store;
        this.enabled = enabled;
    }

    _createClass(ProjectModel, null, [{
        key: 'fromJS',
        value: function fromJS(store, object) {
            var id = object.id,
                name = object.name,
                port = object.port,
                enabled = object.enabled;

            return new ProjectModel(store, id, name, port, enabled);
        }
    }]);

    return ProjectModel;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'name', [_mobx.observable], {
    enumerable: true,
    initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'port', [_mobx.observable], {
    enumerable: true,
    initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'enabled', [_mobx.observable], {
    enumerable: true,
    initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, 'toggle', [_mobx.action], {
    enumerable: true,
    initializer: function initializer() {
        var _this = this;

        return function () {
            _this.enabled = !_this.enabled;
        };
    }
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, 'destroy', [_mobx.action], {
    enumerable: true,
    initializer: function initializer() {
        var _this2 = this;

        return function () {
            _this2.store.projects.remove(_this2);
        };
    }
}), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, 'setPort', [_mobx.action], {
    enumerable: true,
    initializer: function initializer() {
        var _this3 = this;

        return function (event) {
            _this3.port = event.target.value;
        };
    }
}), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, 'setName', [_mobx.action], {
    enumerable: true,
    initializer: function initializer() {
        var _this4 = this;

        return function (event) {
            _this4.name = event.target.value;
        };
    }
})), _class);
exports.default = ProjectModel;