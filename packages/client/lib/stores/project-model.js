'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

useStrict(true);

// "name": "extension",
// "regular": "\\/ux\\/{{project}}\\/release\\/dist\\/(?:(app)-\\w*(\\.bundle)\\.min(\\.js)|(.*\\.bundle\\.js)|(.*\\.hot-update\\.js(?:on)?)|((?:\\w+\\/)+.*))",
// "projects": [{
//     "name": "",
//     "port": "3000",
//     "id": "981f5410-de1c-11e7-a954-2d672b89896c",
//     "enabled": true
// }]


var ProjectModel = (_class = function () {
	function ProjectModel(store, id, title, selected) {
		_classCallCheck(this, ProjectModel);

		_initDefineProp(this, 'port', _descriptor, this);

		_initDefineProp(this, 'title', _descriptor2, this);

		_initDefineProp(this, 'selected', _descriptor3, this);

		this.store = store;
		this.id = id;
		this.title = title;
		this.selected = selected;
	}

	_createClass(ProjectModel, [{
		key: 'toggle',
		value: function toggle() {
			this.selected = !this.selected;
		}
	}, {
		key: 'destroy',
		value: function destroy() {
			this.store.projects.remove(this);
		}
	}, {
		key: 'setTitle',
		value: function setTitle(port) {
			this.port = port;
		}
	}, {
		key: 'setTitle',
		value: function setTitle(title) {
			this.title = title;
		}
		// 转化

	}, {
		key: 'toJS',
		value: function toJS() {
			return {
				id: this.id,
				port: this.port,
				title: this.title,
				selected: this.selected
			};
		}
		// 实例化

	}], [{
		key: 'fromJS',
		value: function fromJS(store, object) {
			return new ProjectModel(store, object.id, object.title, object.selected);
		}
	}]);

	return ProjectModel;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'port', [_mobx.observable], {
	enumerable: true,
	initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'title', [_mobx.observable], {
	enumerable: true,
	initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'selected', [_mobx.observable], {
	enumerable: true,
	initializer: null
})), _class);
exports.default = ProjectModel;