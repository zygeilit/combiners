import React from 'react';

export default class Content extends React.Component {
    render() {
        const { type, status, requestPath, responseTarget } = this.props;
        if (type === 'connect') {return <li className="connect">
            <span>{status}</span>
        </li>}
        const path = responseTarget + requestPath
        return (
            <li>
                <span>{status}</span>
                <span>请求资源路径 =></span>
                <a >{requestPath}</a>
                <span>实际响应地址 =></span>
                <a target="_blank" href={path}>{path}</a>
            </li>
        );
    }
}