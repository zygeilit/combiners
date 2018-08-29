import { observable, computed, reaction, action, toJS } from 'mobx';
import ProjectModel from './project'
// import * as Utils from '../util';
import { v1 } from "uuid";
import api from '../api'
export default class ProjectStore {
    id
    name
    regular
    @observable projects = [];
    constructor(id, name, regular) {
        this.id = id;
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
    subscribeServerToStore = () => (
        reaction(
            () => this.projects.map(project => ({ ...project })),
            () => api.projects(this.toJS()),
            { delay: 200 })
    )
    static fromJS(object) {
        const { id, name, regular, projects } = object;
        const projectStore = new ProjectStore(id, name, regular);
        projectStore.projects = projects.map(item => new ProjectModel.fromJS(projectStore, item));
        return projectStore;

    }
}

