// import io from 'socket.io-client';
import { observable, configure, action,spy } from 'mobx';
configure({
    enforceActions: true
});
export class ViewStore {
    @observable activeMenu = 0;
    @action changeIndex = (index) => this.activeMenu = index;
	subscribeServerToStore() {
		reaction(
			() => this.toJS(),
			activeMenu => window.fetch && fetch('/api/activeMenu', {
				method: 'post',
				body: JSON.stringify({ activeMenu }),
				headers: new Headers({ 'Content-Type': 'application/json' })
			})
		);
    }
}
export default new ViewStore()

// // getConfig
// GET_CONFIG_FROM_SERVER: "get the config data from the sever",
// SAVE_CONFIG_SUCCESS :  "save data to server success",
// CLEAR_SAVING_STATUS : "remove the saving status from store",
// ADD_GROUP: "add a group",
// CHANAGE_GROUP_NAME: 'change the name of a group',
// DELETE_GROUP: "delete a group",
// CHANGE_TAB: "change the tab of the page"