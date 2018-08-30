import { observable, computed, autorun, reaction, action } from 'mobx';
import customModel from '../model/custom'
import { v1 } from "uuid";
export default class CustomStore {
    @observable projects = [];
    subscribeServerToStore = () => {
        reaction(
            () => this.projects.map(item => ({...item})),
            () => window.fetch && fetch('/custom', {
                method: 'post',
                body: JSON.stringify(this.toJS()),
                headers: new Headers({ 'Content-Type': 'application/json' })
            }),
            { delay: 200 })
    }
    @action addProject = () => {
        this.projects.push(new customModel(this, v1()));
    }
    toJS() {
        return this.projects.map(item => item.toJS());
    }
    @action fromJS = (array) => {
        this.projects = array.map(item => customModel.fromJS(this, item));
        this.subscribeServerToStore()
    }
}


