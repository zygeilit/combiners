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
        this.name = name;
        this.regular = regular;
        this.enabled = enabled;
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
    @action setTarget = (event) => {
        this.target = event.target.value
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