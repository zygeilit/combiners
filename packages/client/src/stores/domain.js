import { observable, reaction, action } from 'mobx';
import DomainModel from '../model/domain'
import { v1 } from "uuid";
import api from '../api'
export default class DomainStore {
    @observable projects = [];
    subscribeServerToStore = () => {
        reaction(
            () => this.projects.map(item => ({ ...item })),
            () => api.domain(this.toJS()),
            { delay: 200 })
    }
    @action addProject = () => {
        this.projects.push(new DomainModel(this, v1()));
    }
    toJS() {
        return this.projects.map(item => item.toJS());
    }
    @action fromJS = (array) => {
        this.projects = array.map(item => DomainModel.fromJS(this, item));
        this.subscribeServerToStore()
    }
}


