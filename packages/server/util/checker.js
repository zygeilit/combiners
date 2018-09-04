// todo 重构解析规则
// domain 需要解析的域名名单 https 代理配置生成 证书存储

// tabs 项目切换


const url = require("url");
const { getConfig } = require("./configurator");
const { talentuiReplacer, proxyDecision, isRemoteFileRequest } = require("../constant/index");
// whiteList 白名单文件跳过列表
function searchInWhiteList(desciptions) {
    let config = getConfig();
    let { requestPath } = desciptions;
    let matched = config.whiteList.find(item => {
        if (!item.enabled) return false;
        return requestPath.indexOf(item.regular) !== -1;
    });
    if (matched) {
        desciptions.status = proxyDecision.whiteList;
        desciptions.identifier = matched.name;
        // desciptions.responseTarget = `${desciptions.requestProtocol}://${
        //     config.target.ip
        //     }`;
        desciptions.responseTarget = `${desciptions.requestProtocol}://60.28.207.67`;
        desciptions.isRemoteFileRequest = isRemoteFileRequest;
        desciptions.responsePath = requestPath;
        desciptions.changeOrigin = false;
        return true;
    }
    return false;
}

// custom 自定义单个链接  
// 比如把文件指向本地目录 
// 或者指向一个端口下的文件 
// 类似Charles 文件代理

function searchInCustom(desciptions) {
    let { custom = [] } = getConfig();
    let { requestPath } = desciptions;
    let matched = custom.find(item => {
        if (!item.enabled) return false;
        return requestPath.indexOf(item.regular) !== -1;
    });
    if (matched) {
        desciptions.isRemoteFileRequest =
            matched.target.indexOf("://") === -1
                ? !isRemoteFileRequest
                : isRemoteFileRequest;
        desciptions.status = proxyDecision.custom;
        desciptions.identifier = matched.name;
        if (desciptions.isRemoteFileRequest === isRemoteFileRequest) {
            desciptions.responseTarget = "Local File System";
            desciptions.responsePath = matched.target;
        } else {
            let oUrl = url.parse(matched.target);
            desciptions.responseTarget = `${oUrl.protocol}//${oUrl.host}`;
            desciptions.responsePath = oUrl.path;
        }
        return true;
    }
    return false;
}
// general  通用规则 dll之类类 带分组

function searchInGeneral(desciptions) {
    let { requestPath, requestFrom } = desciptions;
    let { general } = getConfig();
    let matched = general.find(item => {
        let { regular, referer, enabled } = item;
        if (!enabled) return false;
        referer = referer.trim();
        let regx = new RegExp(regular);
        let regMatched = regx.test(requestPath);
        if (requestFrom && referer) {
            return regMatched && requestFrom.indexOf(referer) !== -1;
        }
        return regMatched;
    });
    if (matched) {
        let { regular, port = 3000, name } = matched;
        desciptions.isRemoteFileRequest = !isRemoteFileRequest;
        desciptions.status = proxyDecision.general;
        desciptions.identifier = name;
        desciptions.responseTarget = `http://localhost:${port}`;
        desciptions.responsePath = new RegExp(regular)
            .exec(requestPath)
            .slice(1)
            .join("");
        return true;
    }
    return false;
}

function searchInTalentUI(desciptions) {
    let { requestPath } = desciptions;
    let { talentui: { regular, projects } } = getConfig();
    let matched = projects.find(project => {
        let { name, enabled } = project;
        if (!enabled) return false;
        let regx = new RegExp(regular.replace(talentuiReplacer, name));
        return regx.test(requestPath);
    });

    if (matched) {
        desciptions.isRemoteFileRequest = isRemoteFileRequest;
        desciptions.status = proxyDecision.talentui;
        desciptions.identifier = matched.name;
        desciptions.responseTarget = `http://localhost:${matched.port}`;
        const newRegular = regular.replace(talentuiReplacer, matched.name)
        desciptions.responsePath = new RegExp(newRegular)
            .exec(requestPath)
            .slice(1)
            .join("");
        return true;
    }
    return false;
}


function searchInTalentExtension(desciptions) {
    let { requestPath } = desciptions;
    let { extension: { regular, projects } } = getConfig();
    let matched = projects.find(project => {
        let { name, enabled } = project;
        if (!enabled) return false;
        let regx = new RegExp(regular.replace(talentuiReplacer, name));
        return regx.test(requestPath);
    });
    if (matched) {
        desciptions.isRemoteFileRequest = isRemoteFileRequest;
        desciptions.status = proxyDecision.extension;
        desciptions.identifier = matched.name;
        desciptions.responseTarget = `http://localhost:${matched.port}`;
        const newRegular = regular.replace(talentuiReplacer, matched.name)
        desciptions.responsePath = new RegExp(newRegular)
            .exec(requestPath)
            .slice(1)
            .join("")
            .replace('.bundle', '');
        return true;
    }
    return false;
}
// 
module.exports = function findMatchConfig(ctx) {
    const { headers, url, host, protocol } = ctx;
    let desciptions = {
        type: 'proxy',
        requestFrom: headers.referer || "",
        requestPath: url,
        requestHost: host,
        requestProtocol: protocol,
        changeOrigin: true
    };
    // 依次匹配，是否请求是否匹配到“跳过”规则
    if (
        searchInWhiteList(desciptions) ||
        searchInCustom(desciptions)  ||
        searchInGeneral(desciptions)  ||
        searchInTalentUI(desciptions) ||
        searchInTalentExtension(desciptions)
    ) {
    } else {
        desciptions.isRemoteFileRequest = isRemoteFileRequest
        desciptions.changeOrigin = false;
        desciptions.status = proxyDecision.notMatched;
        // desciptions.responseTarget = `${desciptions.requestProtocol}://${
        //     getConfig().target.ip
        //     }`;
        desciptions.responseTarget = `${desciptions.requestProtocol}://60.28.207.67`;
        desciptions.responsePath = desciptions.requestPath;

    }
    return desciptions;
};
