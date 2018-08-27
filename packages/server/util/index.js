const Koa = require('koa');
const http = require('http');
const spdy = require('spdy');
const options = require('../config/index')
const io = require("socket.io")();

module.exports = class KoaHttpsProxy extends Koa {
    constructor() {
        super();
        this.io = io;
    }
    listens() {
        const server = spdy.createServer(options, this.callback());
        io.attach(server)
        return server.listen.apply(server, arguments);
    }
    listen() {
        const server = http.createServer(this.callback());
        io.attach(server)
        return server.listen.apply(server, arguments);
    }
}