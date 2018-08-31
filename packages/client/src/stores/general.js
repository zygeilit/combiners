import { observable, reaction, action } from 'mobx';
import GeneralModel from '../model/general'
import { v1 } from "uuid";
import api from '../api'

export default class WhiteListStore {
    @observable projects = [];
    subscribeServerToStore = () => {
        reaction(
            () => this.projects.map(item => ({ ...item })),
            () => api.general(this.toJS()),
            { delay: 200 })
    }
    @action addProject = () => {
        this.projects.push(new GeneralModel(this, v1()));
    }
    toJS() {
        return this.projects.map(item => item.toJS());
    }
    @action fromJS = (array) => {
        this.projects = array.map(item => GeneralModel.fromJS(this, item));
        this.subscribeServerToStore()
    }
}
