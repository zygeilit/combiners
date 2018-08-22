"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var constGlobal = exports.constGlobal = {
    GET_CONFIG_FROM_SERVER: "get the config data from the sever",
    SAVE_CONFIG_SUCCESS: "save data to server success",
    CLEAR_SAVING_STATUS: "remove the saving status from store",
    ADD_GROUP: "add a group",
    CHANAGE_GROUP_NAME: 'change the name of a group',
    DELETE_GROUP: "delete a group",
    CHANGE_TAB: "change the tab of the page"
};

var constProduct = exports.constProduct = {
    CHANGE_PROD_NAME: "change a product name",
    CHANGE_PROD_PORT: "change a product port",
    CHANGE_PROD_CONFIG_NAME: "change product config name",
    CHANGE_PROD_CONFIG_REG: "change product config regexp",
    ADD_A_PRODUCT: "add a product",
    ADD_A_PRODUCT_CONFIG: "add a config to product",
    DELETE_A_PRODUCT: "delete a product",
    DELETE_A_PRODUCT_CONFIG: "delete a product config"
};

var constSpecial = exports.constSpecial = {
    ADD_A_SPECIAL: "add a special config",
    CHANGE_SPECIAL_REG: "change a special config regexp",
    CHANGE_SPECIAL_NAME: "change the name of a special config",
    CHANGE_SPECIAL_PORT: "change the port of the special config",
    CHANAGE_SPECIAL_REFERER: "change the referer of the special config",
    DELETE_A_SPECIAL: "delete a special config",
    TOGGLE_SPECIAL_ENABLED: "toggle the state of the special config",
    TOGGLE_GROUP_ITEM_ENABLED: 'the all the items\' select state under a group'
};

var constTarget = exports.constTarget = {
    CHANGE_TARGET_NAME: "change the name of the target server",
    CHANAGE_TARGET_IP: "change the public ip of the target server"
};

var constTalentUI = exports.constTalentUI = {
    ADD_TALENTUI_PROJECT: "add a talentui project",
    CHANAGE_TALENTUI_PROJECT_NAME: "change the name of a talentui project",
    CHANAGE_TALENTUI_PROJECT_PORT: "change the port of a talentui project",
    CHANAGE_TALENTUI_TEMPLATE: "change reg template of the talentui proxy",
    TOGGLE_TALENTUI_ENABLED: "toggle enabled state of talentui config item",
    DELETE_TALENTUI_PROJECT: "delete a talentui project"
};

var constPass = exports.constPass = {
    ADD_PASS_CONFIG: "add a pass config",
    DELETE_PASS_CONFIG: "delete a pass config",
    TOGGLE_PASS_ENABLED: "toggle the enabled state of a pass config",
    CHANAGE_PASS_REG: "change the reg of a pass config",
    CHANGE_PASS_NAME: "change the name of the pass config"
};

var constDirect = exports.constDirect = {
    ADD_DIRECT_CONFIG: "add a direct config",
    DELETE_DIRECT_CONFIG: "delete a direct config",
    TOGGLE_DIRECT_ENABLED: "toggle the enable state of a direct config",
    CHANAGE_DIRECT_REG: "change the reg of a direct config",
    CHANGE_DIRECT_NAME: "change the name of the direct config",
    CHANGE_DIRECT_TARGET: "change the target of the config"
};

var constGroups = exports.constGroups = {
    ADD_A_GROUP: "add a group",
    DELETE_A_GROUP: "delete a group",
    CHANAGE_GROUP_NAME: "change the name of a group"
};