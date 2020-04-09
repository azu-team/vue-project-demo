// 动态导入  views/system下的文件作为路由直接注册
const _import = require('./util.import.' + process.env.NODE_ENV)
let requireComponent = require.context('../views/system', true, /\.vue$/);
let routes = requireComponent.keys().map(fileName => {
    let componentName = fileName.replace(/^\.\//, '').replace(/\.vue$/, '');
    return {
        path: componentName,
        name: componentName,
        component: _import(componentName)
    }
});
// 需要路由额外参数需要单独配置


export default routes