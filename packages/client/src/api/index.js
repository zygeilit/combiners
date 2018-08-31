import request from './request';

class DevelopServerApi {
    constructor() {
    }
    connect(callback) {
        return request.io.on('connect', callback);
    }
    log(callback) {
        return request.io.on('update proxy status', callback);
    }
    newServerConnect(callback) {
        return request.io.on('new server connect', callback);
    }
    config() {
        return request.get('config')
    }
    activeTab(body) {
        return request.post({url:'activeTab',body})
    }
    custom(body) {
        return request.post({url:'custom',body})
    }
    domain(body) {
        return request.post({url:'domain',body})
    }
    general(body) {
        return request.post({url:'general',body})
    }
    activeMenu(body) {
        return request.post({url:'activeMenu',body})
    }
    projects(body) {
        return request.post({url:'projects',body})
    }
}

export default new DevelopServerApi()

// const { logStore } = this.props;
// logStore.addNewLog(log)

// return new Promise(function(resolve, reject) {
//     socket.on
//         then(resolve)
// }