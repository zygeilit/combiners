"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.homeTalentuiActions = undefined;

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
    var action = arguments[1];

    switch (action.type) {
        case _const.constTalentUI.ADD_TALENTUI_PROJECT:
            {
                return state.update("projects", function (projects) {
                    return projects.push((0, _immutable.fromJS)(action.project));
                });
            }
        case _const.constTalentUI.CHANAGE_TALENTUI_PROJECT_NAME:
            {
                return state.update("projects", function (projects) {
                    var projIndex = projects.findIndex(function (item) {
                        return item.get("id") === action.projectId;
                    });
                    return projects.setIn([projIndex, "name"], action.name);
                });
            }
        case _const.constTalentUI.CHANAGE_TALENTUI_PROJECT_PORT:
            {
                return state.update("projects", function (projects) {
                    var projIndex = projects.findIndex(function (item) {
                        return item.get("id") === action.projectId;
                    });
                    return projects.setIn([projIndex, "port"], action.port);
                });
            }
        case _const.constTalentUI.CHANAGE_TALENTUI_TEMPLATE:
            {
                return state.set("template", action.template);
            }
        case _const.constTalentUI.TOGGLE_TALENTUI_ENABLED:
            {
                return state.update("projects", function (projects) {
                    var projIndex = projects.findIndex(function (item) {
                        return item.get("id") === action.projectId;
                    });
                    var path = [projIndex, "enabled"];
                    return projects.setIn(path, !projects.getIn(path));
                });
            }
        case _const.constTalentUI.DELETE_TALENTUI_PROJECT:
            {
                return state.update("projects", function (projects) {
                    return projects.filter(function (item) {
                        return item.get("id") !== action.projectId;
                    });
                });
            }
    }
    return state;
};

var _immutable = require("immutable");

var _uuid = require("uuid");

var _const = require("./const");

var initState = (0, _immutable.fromJS)({
    template: "",
    projects: [{
        name: "",
        port: "",
        id: (0, _uuid.v1)()
    }]
});

var homeTalentuiActions = exports.homeTalentuiActions = {
    addProject: function addProject() {
        return {
            type: _const.constTalentUI.ADD_TALENTUI_PROJECT,
            project: {
                name: "",
                port: "",
                id: (0, _uuid.v1)()
            }
        };
    },
    changeProjectName: function changeProjectName(name, projectId) {
        return {
            type: _const.constTalentUI.CHANAGE_TALENTUI_PROJECT_NAME,
            name: name,
            projectId: projectId
        };
    },
    changeProjectPort: function changeProjectPort(port, projectId) {
        return {
            type: _const.constTalentUI.CHANAGE_TALENTUI_PROJECT_PORT,
            port: port,
            projectId: projectId
        };
    },
    changeTemplate: function changeTemplate(template) {
        return {
            type: _const.constTalentUI.CHANAGE_TALENTUI_TEMPLATE,
            template: template
        };
    },
    toggleEnabled: function toggleEnabled(projectId) {
        return { type: _const.constTalentUI.TOGGLE_TALENTUI_ENABLED, projectId: projectId };
    },
    deleteTalentuiProject: function deleteTalentuiProject(projectId) {
        return { type: _const.constTalentUI.DELETE_TALENTUI_PROJECT, projectId: projectId };
    }
};