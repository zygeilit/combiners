import { observable, computed, autorun, reaction, action } from 'mobx';
import TabsModel from '../model/tab'
import api from '../api'
export default class TabsStore {
    @observable tabs = [];
    @observable activeTab
    subscribeServerToStore = () => {
        reaction(
            () => this.activeTab,
            (activeTab)=> {
                api.activeTab({ activeTab })
            },
            { delay: 200 })
    }
    @action changeIndex = (event, index) => this.activeTab = index;
    @action fromJS = (activeTab, array) => {
        this.tabs = array.map(item => TabsModel.fromJS(item));
        this.activeTab = activeTab;
        this.subscribeServerToStore()
    }
}

