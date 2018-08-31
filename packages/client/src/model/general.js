


import { observable, action } from 'mobx';
export default class ProjectModel {
    store
    id
    groupId
    @observable name;
    @observable port;
    @observable enabled;
    @observable regular
    @observable referer
    constructor(store, id, name = '', port = 3000, enabled = false,regular,referer) {
        this.store = store
        this.id = id;
        this.port = port;
        this.name = name;
        this.enabled = enabled;
        this.referer = referer;
        this.regular = regular;
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
            enabled: this.enabled,
            regular: this.regular,
            referer: this.referer
        };
    }
    @action setReferer = (event) => {
        this.referer = event.target.value
    }
    @action setRegular= (event) => {
        this.regular = event.target.value
    }
    @action setPort = (event) => {
        this.port = event.target.value
    }
    @action setName = (event) => {
        this.name = event.target.value
    }
    static fromJS(store, object) {
        let { id, name, port, enabled, regular, referer } = object;
        return new ProjectModel(store, id, name, port, enabled, regular, referer);
    }
}

    //通用配置
    // "general": [
    //     {
    //         "regular": "规则",
    //         "referer": "引用跳过",
    //         "groupId": "7a747870-aa02-11e8-8f49-d7010957de32",
    //     }
    // ],