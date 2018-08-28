import {observable, computed, reaction} from 'mobx';
import TabsModel from '../models/tabs-model'
// import * as Utils from '../utils';
export default class AllProject {
    @observable tabs = [];
    @observable activeTab
	subscribeServerToStore() {
		reaction(
			() => this.toJS(),
			tabs => window.fetch && fetch('/api/tabs', {
				method: 'post',
				body: JSON.stringify({ tabs }),
				headers: new Headers({ 'Content-Type': 'application/json' })
			})
		);
	}

	toJS() {
		return this.tabs.map(tab => tab.toJS());
	}
	static fromJS(array) {

		const tabsStore = new TabsStore();
		tabsStore.tabs = array.map(item => TabsModel.fromJS(tabsStore, item));
		return tabsStore;
	}
}

// 暂不支持增加tabs 
// addTabs (title) {
    // this.Tabs.push(new TabsModel(this, Utils.uuid(), title, false));
// }