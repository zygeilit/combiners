import { observable, reaction, action } from 'mobx';
import GeneralModel from '../model/general'
import { v1 } from "uuid";

export default class WhiteListStore {
    @observable projects = [];
    subscribeServerToStore = () => {
        reaction(
            () => this.projects.map(item => ({ ...item })),
            () => window.fetch && fetch('/general', {
                method: 'post',
                body: JSON.stringify(this.toJS()),
                headers: new Headers({ 'Content-Type': 'application/json' })
            }),
            { delay: 200 })
    }
    @action addProject = () => {
        this.projects.push(new GeneralModel(this, v1()));
    }
    toJS() {
        return this.projects.map(item => item.toJS());
    }
    @action fromJS = (array) => {
        this.tabs = array.map(item => GeneralModel.fromJS(this, item));
        this.subscribeServerToStore()
    }
}
