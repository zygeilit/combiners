module.exports = {

    // 开发者经常清理本地存储
    "activeMenu": 0,
    "activeTab": 0,

    // 分组信息 
    "groups": {
        "general": [
            {
                "id": "7a747870-aa02-11e8-8f49-d7012957de32",
                "name": "默认",
                "type": "default"
            }
        ]
    },

    //通用配置
    "general": [
        {
            "port": "3000",
            "name": "代理",
            "id": "8f0a6600-aa02-11e8-8f49-d7010357de32",
            "reg": "规则",
            "referer": "引用跳过",
            "groupId": "7a747870-aa02-11e8-8f49-d7010957de32",
            "enabled": true
        }
    ],

    // 多域名兼容
    "domain": [{
        "name": "stnew03.beisen.com",
        "ip": "60.28.207.67"
    }, {
        "name": "xfiles.tita.com",
        "ip": "60.28.207.67"
    }],

    // 主要匹配规则
    "talentui": {
        "regular": "\\/ux\\/{{project}}\\/release\\/dist\\/(?:(main|common|webpack-bootstrap)-\\w*(\\.chunk)\\.min(\\.js)|(.*\\.chunk\\.js)|(.*\\.hot-update\\.js(?:on)?)|((?:\\w+\\/)+.*))",
        "projects": [
            {
                "name": "upaas-portal",
                "port": "3000",
                "id": "981f5410-de1c-11e7-a954-2d672289896c",
                "enabled": false
            }
        ]
    },
    "extension": {
        "regular": "\\/ux\\/{{project}}\\/release\\/dist\\/(?:(app)-\\w*(\\.bundle)\\.min(\\.js)|(.*\\.bundle\\.js)|(.*\\.hot-update\\.js(?:on)?)|((?:\\w+\\/)+.*))",
        "projects": [
            {
                "name": "upaas-portal",
                "port": "3000",
                "id": "981f5410-de1c-11e7-a954-2d672b49896c",
                "enabled": false
            }
        ]
    },

    // 白名单
    "whiteList": [{
        "id": "9fd862b0-de39-11e7-bca1-e191cfa06358",
        "regular": "/ux/upaas/@talentui/dll-react/release/dist/dll-react-15.6.3.min.js",
        "enabled": true,
        "name": "跳过15 dll"
    }],


    // 自定义 类似 Charles
    "custom": [{
        "id": "cf31b030-a5d4-11e8-a375-733fc4a8c209",
        "name": "代理x文件",
        "regular": "http://example.com/x.js",
        "target": "sdfsdf",
        "enabled": true
    }]
}