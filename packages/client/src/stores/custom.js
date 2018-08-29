import { observable, computed, autorun, reaction, action } from 'mobx';
import WhiteListModel from '../model/white-list'
export default class WhiteListStore {
    @observable list = [];
    subscribeServerToStore = () => {
        reaction(
            () => this.list.map(item => ({...item})),
            () => window.fetch && fetch('/activeTab', {
                method: 'post',
                body: JSON.stringify(this.toJS()),
                headers: new Headers({ 'Content-Type': 'application/json' })
            }),
            { delay: 200 })
    }
    toJS() {
        return this.list.map(item => item.toJS());
    }
    @action fromJS = (array) => {
        this.tabs = array.map(item => WhiteListModel.fromJS(this, item));
        this.subscribeServerToStore()
    }
}


