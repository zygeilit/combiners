import { observable, computed, autorun, reaction, action } from 'mobx';
import TabsModel from '../model/tab'
export default class TabsStore {
    @observable tabs = [];
    @observable activeTab
    subscribeServerToStore = () => {
        reaction(
            () => this.activeTab,
            (activeTab)=> window.fetch && fetch('/activeTab', {
                method: 'post',
                body: JSON.stringify({ activeTab }),
                headers: new Headers({ 'Content-Type': 'application/json' })
            }),
            { delay: 200 })
    }
    @action changeIndex = (event, index) => this.activeTab = index;
    @action fromJS = (activeTab, array) => {
        this.tabs = array.map(item => TabsModel.fromJS(item));
        this.activeTab = activeTab;
        this.subscribeServerToStore()
    }
}

