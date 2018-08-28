// import io from 'socket.io-client';
import { observable, configure, action,spy,reaction } from 'mobx';
configure({
    enforceActions: true
});
export default class ViewStore {
    // 活动菜单
    @observable activeMenu = 0;
    // 活动tab
    @observable activeTab = 0;
    // 分组  obj > general(array)
    @observable groups
    // general array
    @observable general
    // 
    @observable domain
    @observable talentui
    @observable extension
    @observable whiteList
    @observable custom
    @action changeIndex = (index) => this.activeMenu = index;
	subscribeServerToStore() {
		reaction(
            () => this.activeMenu,
            (activeMenu) => console.log(activeMenu)
			// activeMenu => window.fetch && fetch('/api/activeMenu', {
			// 	method: 'post',
			// 	body: JSON.stringify({ activeMenu }),
			// 	headers: new Headers({ 'Content-Type': 'application/json' })
			// })
		);
    }
}
//  new ViewStore()

// // getConfig
// GET_CONFIG_FROM_SERVER: "get the config data from the sever",
// SAVE_CONFIG_SUCCESS :  "save data to server success",
// CLEAR_SAVING_STATUS : "remove the saving status from store",
// ADD_GROUP: "add a group",
// CHANAGE_GROUP_NAME: 'change the name of a group',
// DELETE_GROUP: "delete a group",
// CHANGE_TAB: "change the tab of the page"

//   class UserStore {
//     constructor(rootStore) {
//       this.rootStore = rootStore
//     }
  
//     getTodos(user) {
//       // 通过根 store 来访问 todoStore
//       return this.rootStore.todoStore.todos.filter(todo => todo.author === user)
//     }
//   }
  
//   class TodoStore {
//     @observable todos = []
  
//     constructor(rootStore) {
//       this.rootStore = rootStore
//     }
//   }