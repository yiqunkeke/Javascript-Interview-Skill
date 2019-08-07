var path = require('path')
var webpack = require('webpack')

module.exports = {
    context: path.resolve(__dirname, './src'),
    entry: {
        app: './app.js'
    },
    // webpack 会自动创建 dist目录，并生成bundle.js文件
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    optimization: {
        minimize: true // 压缩JS,由原来的6.9K --> 2.0K
    }
}