'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class, _descriptor;

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

var LogsStore = (_class = function () {
	function LogsStore() {
		_classCallCheck(this, LogsStore);

		_initDefineProp(this, 'logs', _descriptor, this);
	}

	_createClass(LogsStore, [{
		key: 'addNewLog',
		value: function addNewLog(log) {
			// 新增项目
			this.logs.unshift(log);
		}
	}, {
		key: 'clearLogs',
		value: function clearLogs() {
			this.logs = [];
		}
		// toJS() {
		// 	return this.logs.map(log => log.toJS());
		// }

	}]);

	return LogsStore;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'logs', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return [];
	}
}), _applyDecoratedDescriptor(_class.prototype, 'addNewLog', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'addNewLog'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'clearLogs', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'clearLogs'), _class.prototype)), _class);
exports.default = LogsStore;