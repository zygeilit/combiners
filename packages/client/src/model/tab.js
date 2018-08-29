import { observable, computed, reaction, action, toJS } from 'mobx';
import ProjectModel from './project'
// import * as Utils from '../util';
import { v1 } from "uuid";
import api from '../api'
export default class ProjectStore {
    id
    name
    regular
    key
    @observable projects = [];
    constructor(id, name, regular, key) {
        this.id = id;
        this.key = key;
        this.name = name;
        this.enabled = regular;
        this.subscribeServerToStore()
    }
    @action addProject = () => {
        this.projects.push(new ProjectModel(this, v1()));
    }
    toJS() {
        return this.projects.map(project => project.toJS());
    }
    // tab还没做成动态的 先组合数据发过去
    composer() {
        return {
            key: this.key,
            project: this.toJS()
        }
    }
    subscribeServerToStore = () => (
        reaction(
            () => this.projects.map(project => ({ ...project })),
            () => api.projects(this.composer()),
            { delay: 200 })
    )
    static fromJS(object) {
        const { id, name, regular, projects, key } = object;
        const projectStore = new ProjectStore(id, name, regular, key);
        projectStore.projects = projects.map(item => new ProjectModel.fromJS(projectStore, item));
        return projectStore;

    }
}

