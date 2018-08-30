import IconNode from '../static/nodejs.png';
import IconRedux from '../static/redux.png';
import IconWebpack from '../static/webpack.png';
export default class AboutStore {
    cards = [
        {
            name: 'Cli',
            background: '#3c3c3c',
            icon: IconNode,
            content: 'Talent UI 2.0 命令行工具,包含各类脚手架模板,支持项目/组件/Pagebuilder组件/扩展项目等,在react的基础上增加了ts的以及vue的模板。'
        }, {
            name: 'Config',
            background: 'rgba(142, 214, 251, 0.35)',
            icon: IconWebpack,
            content: 'Talent UI 2.0 构建工具,经过长期项目实践,把构建完全自动化,屏蔽繁琐配置,内置polyfill方案,自动处理浏览器兼容问题,内置依赖可视化分析,帮助开发者优化项目体积。'
        }, {
            name: 'bootstarp',
            background: '#e6d7ff',
            icon: IconRedux,
            content: 'Talent UI 2.0 项目启动程序,帮助开发者隐藏繁琐的redux/router配置支持多种中间件以及动态路由。'
        }
    ]
    copyright = 'Talent UI 2.0 强力驱动'
}