import ViewStore from './index';
import LogStore from './logger';

export default class RootStore {
    constructor() {
        this.viewStore = new ViewStore(this)
        this.logStore = new LogStore(this)
    }
}
