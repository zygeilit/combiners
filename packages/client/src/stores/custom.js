import { observable, computed, autorun, reaction, action } from 'mobx';
import customModel from '../model/custom'
import { v1 } from "uuid";
import api from '../api'
export default class CustomStore {
    rootStore
    constructor(store) {
        this.rootStore = store
    }
    @observable projects = [];
    subscribeServerToStore = () => {
        reaction(
            () => this.projects.map(item => ({...item})),
            () => {
                api.custom(this.toJS())
                // this.rootStore.changetSnackbarStatus()
            },
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


