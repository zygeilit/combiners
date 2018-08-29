import { observable, action } from 'mobx';
export default class LogStore {
    @observable logs = [];

    @action addNewLog = (log) => {
        this.logs.unshift(log)
    };
    @action clearLogs = () => {
        this.logs = [];
    }
}

//  调用socket