const { v1 } = require("uuid");
module.exports = function (message) {
    return Object.assign({ id: v1() }, message);
};
