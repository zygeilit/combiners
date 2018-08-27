
import {observable} from 'mobx';
useStrict(true);

// "name": "extension",
// "regular": "\\/ux\\/{{project}}\\/release\\/dist\\/(?:(app)-\\w*(\\.bundle)\\.min(\\.js)|(.*\\.bundle\\.js)|(.*\\.hot-update\\.js(?:on)?)|((?:\\w+\\/)+.*))",
// "projects": [{
//     "name": "",
//     "port": "3000",
//     "id": "981f5410-de1c-11e7-a954-2d672b89896c",
//     "enabled": true
// }]


export default class ProjectModel {
	store;
    id
    @observable port;
	@observable title;
    @observable selected;
    
	constructor(store, id, title, selected) {
		this.store = store;
		this.id = id;
		this.title = title;
		this.selected = selected;
	}

	toggle() {
		this.selected = !this.selected;
	}

	destroy() {
		this.store.projects.remove(this);
	}
    setTitle(port) {
		this.port = port;
	}
	setTitle(title) {
		this.title = title;
	}
    // 转化
	toJS() {
		return {
            id: this.id,
            port: this.port,
			title: this.title,
			selected: this.selected
		};
	}
    // 实例化
	static fromJS(store, object) {
		return new ProjectModel(store, object.id, object.title, object.selected);
	}
}