'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.ViewStore = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class, _descriptor, _descriptor2; // import io from 'socket.io-client';


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

(0, _mobx.configure)({
	enforceActions: true
});
var ViewStore = exports.ViewStore = (_class = function () {
	function ViewStore() {
		_classCallCheck(this, ViewStore);

		_initDefineProp(this, 'activeMenu', _descriptor, this);

		_initDefineProp(this, 'changeIndex', _descriptor2, this);
	}

	_createClass(ViewStore, [{
		key: 'subscribeServerToStore',
		value: function subscribeServerToStore() {
			var _this = this;

			reaction(function () {
				return _this.toJS();
			}, function (activeMenu) {
				return window.fetch && fetch('/api/activeMenu', {
					method: 'post',
					body: JSON.stringify({ activeMenu: activeMenu }),
					headers: new Headers({ 'Content-Type': 'application/json' })
				});
			});
		}
	}]);

	return ViewStore;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'activeMenu', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return 0;
	}
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'changeIndex', [_mobx.action], {
	enumerable: true,
	initializer: function initializer() {
		var _this2 = this;

		return function (index) {
			return _this2.activeMenu = index;
		};
	}
})), _class);
exports.default = new ViewStore();

// // getConfig
// GET_CONFIG_FROM_SERVER: "get the config data from the sever",
// SAVE_CONFIG_SUCCESS :  "save data to server success",
// CLEAR_SAVING_STATUS : "remove the saving status from store",
// ADD_GROUP: "add a group",
// CHANAGE_GROUP_NAME: 'change the name of a group',
// DELETE_GROUP: "delete a group",
// CHANGE_TAB: "change the tab of the page"