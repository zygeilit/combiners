import { observable, transaction, configure, action, spy, reaction, computed } from 'mobx';
import ViewStore from './view';
import TabsStore from './tabs';
import LogStore from './logger';
import DomainStore from './domain'
import CustomStore from './custom'
import GeneralStore from './general'
import AboutStore from './about'
import WhiteListStore from './white-list'
import api from '../api'
export default class RootStore {
    @observable snackbarStatus = {
        message: '配置修改成功',
        status: false
    }
    constructor() {
        this.logStore = new LogStore(this)
        this.tabsStore = new TabsStore(this)
        this.viewStore = new ViewStore(this)
        this.aboutStore = new AboutStore(this);
        this.domainStore = new DomainStore(this)
        this.customStore = new CustomStore(this)
        this.generalStore = new GeneralStore(this);
        this.whiteListStore = new WhiteListStore(this);
    }
    // @action static updateMessage = (message = '配置修改成功') => {
    //     this.message = message;
    // }
    @action changetSnackbarStatus = (config) => {
        this.snackbarStatus = config;
    }
    @action async initializeFromServer() {
        // 偷个懒 合并请求 批量设置所有页面数据 因为懒得配置路由
        let result = await api.config();
        console.log(result)
        // groups 暂时没用
        let { activeTab, activeMenu, general, domain, talentui, extension, whiteList, custom } = result
        // console.log(whiteList,domain,general)
        transaction(() => {
            this.domainStore.fromJS(domain)
            this.customStore.fromJS(custom)
            this.viewStore.fromJS(activeMenu)
            this.generalStore.fromJS(general)
            this.whiteListStore.fromJS(whiteList)
            this.tabsStore.fromJS(activeTab, [talentui, extension])
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
