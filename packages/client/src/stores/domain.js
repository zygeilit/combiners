import { observable, reaction, action } from 'mobx';
import DomainModel from '../model/domain'
import { v1 } from "uuid";
export default class WhiteListStore {
    @observable projects = [];
    subscribeServerToStore = () => {
        reaction(
            () => this.projects.map(item => ({ ...item })),
            () => window.fetch && fetch('/domain', {
                method: 'post',
                body: JSON.stringify(this.toJS()),
                headers: new Headers({ 'Content-Type': 'application/json' })
            }),
            { delay: 200 })
    }
    @action addProject = () => {
        this.projects.push(new DomainModel(this, v1()));
    }
    toJS() {
        return this.projects.map(item => item.toJS());
    }
    @action fromJS = (array) => {
        this.tabs = array.map(item => DomainModel.fromJS(this, item));
        this.subscribeServerToStore()
    }
}


