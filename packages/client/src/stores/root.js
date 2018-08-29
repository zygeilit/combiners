import { observable, transaction, configure, action, spy, reaction, computed } from 'mobx';
import ViewStore from './view';
import LogStore from './logger';
import AllTabsStore from './all-tabs';
export default class RootStore {
    constructor() {
        this.viewStore = new ViewStore(this)
        this.logStore = new LogStore(this)
        this.allTabsStore = new AllTabsStore(this)
    }
    @action save(settings) {
    }
    @action async initializeFromServer() {
        // 偷个懒 合并一次请求 批量设置所有页面数据
        let result = await fetch('/get').then((response) => response.json());
        let { activeTab, activeMenu, groups, general, domain, talentui, extension, whiteList, custom } = result
        // todo 优化批量更新
        transaction(() => {
            this.viewStore.fromJS(activeMenu)
            this.allTabsStore.fromJS(activeTab, [talentui, extension])
        })

    }
}

// 跨 store 通信
// // import sessionStore from "./SessionStore.ts";
// class OtherStoreThatDependsOnSessionStore {
//     // enabled is now always in sync with the existence of a session
//     @computed get enabled() {
// 	return !!sessionStore.session;
//     } 
// }
