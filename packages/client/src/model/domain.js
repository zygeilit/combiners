
import { observable, action } from 'mobx';
export default class ProjectModel {
    store
    id
    @observable name;
    @observable ip;
    @observable enabled;
    constructor(store, id, name = '', ip = 3000, enabled = false) {
        this.store = store
        this.id = id;
        this.ip = ip;
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
            ip: this.ip,
			enabled: this.enabled
		};
	}
    @action setName = (event) => {
        this.name = event.target.value
    }
    static fromJS(store, object) {
        let { id, name, ip, enabled } = object;
        return new ProjectModel(store, id, name, ip, enabled);
    }
}
    // 多域名兼容
    // "domain": [{
    //     "name": "stnew03.beisen.com",
    //     "ip": "60.28.207.67",
    
    // }, {
    //     "name": "xfiles.tita.com",
    //     "ip": "60.28.207.67"
    // }],