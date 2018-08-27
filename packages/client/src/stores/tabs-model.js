import {observable} from 'mobx';
useStrict(true);
import {observable, computed, reaction} from 'mobx';
import ProjectModel from '../models/ProjectModel'
import * as Utils from '../utils';

export default class ProjectStore {
	store;
    name
    regular
    @observable projects = [];
	addProject (title) {
        // 新增项目
		this.projects.push(new ProjectModel(this, Utils.uuid(), title, false));
	}

	clearCompleted () {
		this.projects = this.projects.filter(
			project => !project.completed
		);
	}

	toJS() {
		return this.projects.map(projects => projects.toJS());
	}

    // 转化
	static fromJS(array) {
		const projectStore = new ProjectStore();
		projectStore.projects = array.map(item => ProjectModel.fromJS(projectStore, item));
		return projectStore;
	}
}