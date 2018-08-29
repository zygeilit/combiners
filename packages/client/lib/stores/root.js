'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class, _descriptor;

var _mobx = require('mobx');

var _view = require('./view');

var _view2 = _interopRequireDefault(_view);

var _logger = require('./logger');

var _logger2 = _interopRequireDefault(_logger);

var _allTabs = require('./all-tabs');

var _allTabs2 = _interopRequireDefault(_allTabs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

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

var RootStore = (_class = function () {
    function RootStore() {
        _classCallCheck(this, RootStore);

        _initDefineProp(this, 'config', _descriptor, this);

        this.viewStore = new _view2.default(this);
        this.logStore = new _logger2.default(this);
        this.allTabsStore = new _allTabs2.default(this);
    }

    _createClass(RootStore, [{
        key: 'save',
        value: function save(settings) {}
    }, {
        key: 'initializeFromServer',
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var result, activeTab, activeMenu, groups, general, domain, talentui, extension, whiteList, custom;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return fetch('/get').then(function (response) {
                                    return response.json();
                                });

                            case 2:
                                result = _context.sent;
                                activeTab = result.activeTab, activeMenu = result.activeMenu, groups = result.groups, general = result.general, domain = result.domain, talentui = result.talentui, extension = result.extension, whiteList = result.whiteList, custom = result.custom;
                                // todo 优化批量更新

                                this.viewStore.fromJS(activeMenu);
                                this.allTabsStore.fromJS(activeTab, [talentui, extension]);

                            case 6:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function initializeFromServer() {
                return _ref.apply(this, arguments);
            }

            return initializeFromServer;
        }()
    }]);

    return RootStore;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'config', [_mobx.observable], {
    enumerable: true,
    initializer: null
}), _applyDecoratedDescriptor(_class.prototype, 'save', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'save'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'initializeFromServer', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'initializeFromServer'), _class.prototype)), _class);
exports.default = RootStore;