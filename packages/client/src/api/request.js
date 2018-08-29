const socket = require('socket.io-client');
class Requst {
    constructor() {
        this.baseUrl = `http://localhost/tdServer/`;
        this.io = socket(this.baseUrl);
    }
    composeUrl(url) {
       return this.baseUrl + url
    }
    get(url) {
        const api = this.composeUrl(url)
        return fetch(api)
            .then((response) => response.json())
            .catch(error => error)
    }
    post({url,body}) {
        const api = this.composeUrl(url)
       return fetch(api, {
            method: 'post',
            body: JSON.stringify(body),
            headers: new Headers({ 'Content-Type': 'application/json' })
        })
            .then((response) => response.json())
            .catch(error => error)
    }
}
export default new Requst()
// sockets 层
// 页面状态更新
// 日志更新
// 新增服务器激活提醒

// http 层
// 文件转发
// 接口拦截
// 请求转发
// 证书下载
