import { observable, reaction, action } from 'mobx';
import GeneralModel from '../model/general'
export default class WhiteListStore {
    @observable generals = [];
    subscribeServerToStore = () => {
        reaction(
            () => this.generals.map(item => ({...item})),
            () => window.fetch && fetch('/general', {
                method: 'post',
                body: JSON.stringify(this.toJS()),
                headers: new Headers({ 'Content-Type': 'application/json' })
            }),
            { delay: 200 })
    }
    toJS() {
        return this.generals.map(item => item.toJS());
    }
    @action fromJS = (array) => {
        this.tabs = array.map(item => GeneralModel.fromJS(this, item));
        this.subscribeServerToStore()
    }
}
