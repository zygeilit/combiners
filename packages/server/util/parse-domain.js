module.exports = function (servername) {
    //todo 兼容常见 后缀名成 .tv .info 等等
    try {
        return servername.split('.').slice(-2).join('.')
    } catch (error) {
        return 'beisen.com'
    }
};
