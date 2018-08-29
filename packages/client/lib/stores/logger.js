'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _desc, _value, _class, _descriptor, _descriptor2, _descriptor3;

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

var LogStore = (_class = function LogStore() {
    _classCallCheck(this, LogStore);

    _initDefineProp(this, 'logs', _descriptor, this);

    _initDefineProp(this, 'addNewLog', _descriptor2, this);

    _initDefineProp(this, 'clearLogs', _descriptor3, this);
}, (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'logs', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return [];
    }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'addNewLog', [_mobx.action], {
    enumerable: true,
    initializer: function initializer() {
        var _this = this;

        return function (log) {
            _this.logs.unshift(log);
        };
    }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'clearLogs', [_mobx.action], {
    enumerable: true,
    initializer: function initializer() {
        var _this2 = this;

        return function () {
            _this2.logs = [];
        };
    }
})), _class);
exports.default = LogStore;