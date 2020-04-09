module.exports = {
    publicPath: './', //root
    outputDir: 'dist', //root name
    assetsDir: 'source', //source name
    lintOnSave: false, // close esLint
    productionSourceMap: false, //close SourceMap
    runtimeCompiler: true,
    devServer: {
        proxy: {
            '/myjson': {
                target: 'https://api.myjson.com', // 接口域名
                secure: false, // https配置false
                changeOrigin: true, //是否跨域
                pathRewrite: {
                    '^/myjson': '',
                }
            }
        },
        // host: 'localhost',
        port: 8399,
        open: true
    },

    pluginOptions: { // 第三方插件配置
        // 'style-resources-loader': {
        //     preProcessor: 'scss', //声明类型
        //     'patterns': [
        //     ],
        // }
    },

    css: {
        sourceMap: false,
        loaderOptions: {
            sass: {
                // 新版sass抛弃了data语法
                prependData: `@import "@/assets/style/global.scss";`
            }
        }

    },
    chainWebpack: config => {
        /**
         * 删除懒加载模块的 prefetch preload，降低带宽压力
         * https://cli.vuejs.org/zh/guide/html-and-static-assets.html#prefetch
         * https://cli.vuejs.org/zh/guide/html-and-static-assets.html#preload
         * 而且预渲染时生成的 prefetch 标签是 modern 版本的，低版本浏览器是不需要的
         */
        config.plugins
            .delete('prefetch')
            .delete('preload')
        // 解决 cli3 热更新失效 https://github.com/vuejs/vue-cli/issues/1559
        config.resolve
            .symlinks(true)
    },
}