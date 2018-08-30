import { observable, computed, autorun, reaction, action } from 'mobx';
import WhiteListModel from '../model/white-list'
import { v1 } from "uuid";

export default class WhiteListStore {
    @observable projects = [];
    subscribeServerToStore = () => {
        reaction(
            () => this.projects.map(item => ({ ...item })),
            () => window.fetch && fetch('/whiteList', {
                method: 'post',
                body: JSON.stringify(this.toJS()),
                headers: new Headers({ 'Content-Type': 'application/json' })
            }),
            { delay: 200 })
    }

    @action addProject = () => {
        this.projects.push(new WhiteListModel(this, v1()));
    }
    toJS() {
        return this.projects.map(item => item.toJS());
    }
    @action fromJS = (array) => {
        this.projects = array.map(item => WhiteListModel.fromJS(this, item));
        this.subscribeServerToStore()
    }
}

