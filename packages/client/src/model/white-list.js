import { observable, action } from 'mobx';
export default class WhiteListModel {
    store
    id
    @observable regular;
    @observable enabled;
    @observable name;
    constructor(store, id, regular = '', enabled = false, name = '') {
        this.store = store
        this.id = id;
        this.port = regular;
        this.name = enabled;
        this.store = store;
        this.enabled = name;
    }
    @action toggle = () => {
        this.enabled = !this.enabled;
    }
    @action destroy = () => {
        this.store.projects.remove(this);
    }
    @action setRegular = (event) => {
        this.regular = event.target.value
    }
    @action setName = (event) => {
        this.name = event.target.value
    }
    toJS() {
		return {
			id: this.id,
            regular: this.regular,
            enabled: this.enabled,
			name: this.name
		};
	}

    static fromJS(store, object) {
        let { id, regular, enabled, name } = object;
        return new WhiteListModel(store, id, regular, enabled, name);
    }
}