"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var database = exports.database = {
    "activeMenu": 0,
    "activeTab": 0,
    "general": {
        "special": [{
            "id": "4f4c8d00-a461-11e8-b052-79cca0cff23d",
            "name": "默认",
            "type": "default",
            "rules": [{
                "port": "3000",
                "referer": "",
                "name": "DLL走localhost",
                "id": "4059afc0-db22-11e7-a3db-3fd92cfa26c3",
                "reg": "\\/ux\\/upaas\\/(?:@\\w+\\/[\\w-]+)\\/release\\/dist\\/([\\w-]+)-[\\d\\.]+\\.min(\\.js)",
                "enabled": true,
                "directMatch": ""
            }]
        }, {
            "id": "18092860-a5e4-11e8-9009-3b89cc2d9733",
            "name": "新的组",
            "rules": [{}]
        }]
    },
    "domain": [{
        "name": "stnew03.beisen.com",
        "ip": "60.28.207.67"
    }, {
        "name": "xfiles.tita.com",
        "ip": "60.28.207.67"
    }],
    "tabs": [{
        "name": "extension",
        "regular": "\\/ux\\/{{project}}\\/release\\/dist\\/(?:(app)-\\w*(\\.bundle)\\.min(\\.js)|(.*\\.bundle\\.js)|(.*\\.hot-update\\.js(?:on)?)|((?:\\w+\\/)+.*))",
        "projects": [{
            "name": "",
            "port": "3000",
            "id": "981f5410-de1c-11e7-a954-2d672b89896c",
            "enabled": true
        }]
    }, {
        "name": "talentui",
        "regular": "\\/ux\\/{{project}}\\/release\\/dist\\/(?:(main|common|webpack-bootstrap)-\\w*(\\.chunk)\\.min(\\.js)|(.*\\.chunk\\.js)|(.*\\.hot-update\\.js(?:on)?)|((?:\\w+\\/)+.*))",
        "projects": [{
            "name": "tenantbase",
            "port": "3000",
            "id": "981f5410-de1c-11e7-a954-2d672b89896c",
            "enabled": true
        }]
    }],
    "whiteList": [{
        "id": "9fd862b0-de39-11e7-bca1-e191cfa06358",
        "regular": "/ux/upaas/@talentui/dll-react/release/dist/dll-react-15.6.3.min.js",
        "enabled": true,
        "name": "sdfsdfsdfsdf"
    }],
    "custom": [{
        "id": "cf31b030-a5d4-11e8-a375-733fc4a80209",
        "name": "dsfs",
        "regular": "sdfsdf",
        "target": "sdfsdf",
        "enabled": true
    }, {
        "id": "e33ce9f0-a5d4-11e8-a375-733fc4a80209",
        "name": "sdfsdfsdf",
        "regular": "sdfsdfsdf",
        "target": "sdfsdfs",
        "enabled": true
    }]
};