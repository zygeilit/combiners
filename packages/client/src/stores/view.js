// import io from 'socket.io-client';
import { observable, configure, action, spy, reaction, computed } from 'mobx';
configure({
    enforceActions: true
});
export default class ViewStore {
    @observable activeMenu
    @action fromJS(activeMenu) {
        this.activeMenu = activeMenu
        this.subscribeServerToStores()
    }
    @action changeIndex = (index) => {
        this.activeMenu = index;
    }
    subscribeServerToStores = () => {
        reaction(
            () => this.activeMenu,
            (activeMenu) => window.fetch && fetch('/activeMenu', {
                method: 'post',
                body: JSON.stringify({ activeMenu }),
                headers: new Headers({ 'Content-Type': 'application/json' })
            }),
            { delay: 200 })
    }
}


