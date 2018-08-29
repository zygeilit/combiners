import request from './request';

class DevelopServerApi {
    constructor() {
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
    custom() {
        return request.post({url:'custom',body})
    }
    domain() {
        return request.post({url:'domain',body})
    }
    general() {
        return request.post({url:'general',body})
    }
    activeMenu() {
        return request.post({url:'activeMenu',body})
    }
    projects() {
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