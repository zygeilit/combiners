
import { observable, action } from 'mobx';
export default class ProjectModel {
    store
    id
    @observable name;
    @observable port;
    @observable enabled;
    @observable target;
    @observable regular;
    constructor(store, id, name = '', regular, enabled = false, target) {
        this.store = store
        this.id = id;
        this.name = name;
        this.target = target;
        this.regular = regular;
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
            target :this.target,
            enabled: this.enabled,
            regular :this.regular,
        };
    }
    
    @action setRegular = (event) => {
        this.regular = event.target.value
    }
    @action setTarget = (event) => {
        this.target = event.target.value
    }
    @action setName = (event) => {
        this.name = event.target.value
    }
    static fromJS(store, object) {
        let { id, name, enabled, regular, target } = object;
        return new ProjectModel(store, id, name, regular, enabled, target);
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