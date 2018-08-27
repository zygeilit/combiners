'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class, _descriptor, _descriptor2;

var _mobx = require('mobx');

var _tabsModel = require('../models/tabs-model');

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

// import * as Utils from '../utils';
var AllProject = (_class = function () {
	function AllProject() {
		_classCallCheck(this, AllProject);

		_initDefineProp(this, 'tabs', _descriptor, this);

		_initDefineProp(this, 'activeTab', _descriptor2, this);
	}

	_createClass(AllProject, [{
		key: 'subscribeServerToStore',
		value: function subscribeServerToStore() {
			var _this = this;

			(0, _mobx.reaction)(function () {
				return _this.toJS();
			}, function (tabs) {
				return window.fetch && fetch('/api/tabs', {
					method: 'post',
					body: JSON.stringify({ tabs: tabs }),
					headers: new Headers({ 'Content-Type': 'application/json' })
				});
			});
		}
	}, {
		key: 'toJS',
		value: function toJS() {
			return this.tabs.map(function (tab) {
				return tab.toJS();
			});
		}
	}], [{
		key: 'fromJS',
		value: function fromJS(array) {
			var tabsStore = new TabsStore();
			tabsStore.tabs = array.map(function (item) {
				return _tabsModel2.default.fromJS(tabsStore, item);
			});
			return tabsStore;
		}
	}]);

	return AllProject;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'tabs', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return [];
	}
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'activeTab', [_mobx.observable], {
	enumerable: true,
	initializer: null
})), _class);

// 暂不支持增加tabs 
// addTabs (title) {
// this.Tabs.push(new TabsModel(this, Utils.uuid(), title, false));
// }

exports.default = AllProject;