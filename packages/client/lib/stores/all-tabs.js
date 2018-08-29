'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4;

var _mobx = require('mobx');

var _tabsModel = require('./tabs-model');

var _tabsModel2 = _interopRequireDefault(_tabsModel);

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

var TabsStore = (_class = function TabsStore() {
    _classCallCheck(this, TabsStore);

    _initDefineProp(this, 'tabs', _descriptor, this);

    _initDefineProp(this, 'activeTab', _descriptor2, this);

    _initDefineProp(this, 'changeIndex', _descriptor3, this);

    _initDefineProp(this, 'fromJS', _descriptor4, this);
}, (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'tabs', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return [];
    }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'activeTab', [_mobx.observable], {
    enumerable: true,
    initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'changeIndex', [_mobx.action], {
    enumerable: true,
    initializer: function initializer() {
        var _this = this;

        return function (event, index) {
            return _this.activeTab = index;
        };
    }
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, 'fromJS', [_mobx.action], {
    enumerable: true,
    initializer: function initializer() {
        var _this2 = this;

        return function (activeTab, array) {
            _this2.tabs = array.map(function (item) {
                return _tabsModel2.default.fromJS(item);
            });
            _this2.activeTab = activeTab;
        };
    }
})), _class);
exports.default = TabsStore;