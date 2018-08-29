import { observable, reaction, action } from 'mobx';
import DomainModel from '../model/domain'
export default class WhiteListStore {
    @observable domains = [];
    subscribeServerToStore = () => {
        reaction(
            () => this.domains.map(item => ({ ...item })),
            () => window.fetch && fetch('/domain', {
                method: 'post',
                body: JSON.stringify(this.toJS()),
                headers: new Headers({ 'Content-Type': 'application/json' })
            }),
            { delay: 200 })
    }
    toJS() {
        return this.domains.map(item => item.toJS());
    }
    @action fromJS = (array) => {
        this.tabs = array.map(item => DomainModel.fromJS(this, item));
        this.subscribeServerToStore()
    }
}


