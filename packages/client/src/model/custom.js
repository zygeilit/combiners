
import { observable, action } from 'mobx';
export default class ProjectModel {
    store
    id
    @observable name;
    @observable port;
    @observable enabled;
    constructor(store, id, name = '', port = 3000, enabled = false) {
        this.store = store
        this.id = id;
        this.port = port;
        this.name = name;
        this.store = store;
        this.enabled = enabled;
    }
    @action toggle = () => {
        this.enabled = !this.enabled;
    }
    @action destroy = () => {
        this.store.projects.remove(this);
    }
    toJS() {
		return {
			id: this.id,
            name: this.name,
            port: this.port,
			enabled: this.enabled
		};
	}

    @action setPort = (event) => {
        this.port = event.target.value
    }
    @action setName = (event) => {
        this.name = event.target.value
    }
    static fromJS(store, object) {
        let { id, name, port, enabled } = object;
        return new ProjectModel(store, id, name, port, enabled);
    }
}
// 自定义 类似 Charles
// "custom": [{
//     "id": "cf31b030-a5d4-11e8-a375-733fc4a8c209",
//     "name": "代理x文件",
//     "regular": "http://example.com/x.js",
//     "target": "sdfsdf",
//     "enabled": true
// }]