"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var isSaving = false;

exports.default = function (store) {
    return function (next) {
        return function (action) {
            next(action);
            if ((typeof action === "undefined" ? "undefined" : _typeof(action)) === "object" && !action.noSave && !isSaving) {
                isSaving = true;
                var data = store.getState().get("home").toJS();
                fetch("/api/save", {
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json"
                    },
                    method: "POST",
                    body: JSON.stringify(data)
                }).then(function (res) {
                    isSaving = false;
                });
            }
        };
    };
};