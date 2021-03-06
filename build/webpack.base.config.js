const webpack = require('webpack')
    , path = require('path')
    , vueConf = require('./configs/vue-loader.config')
    , imgConf = require('./configs/images.config')
    , htmlPlgConf = require('./configs/html-plugin.config')

const HtmlWebpackPlugin = require('html-webpack-plugin')

const root = path.join(__dirname, '..')
    , src = path.join(root, 'src')
    , app = path.join(src, 'app')

module.exports = {
    devtool: 'source-map',

    entry: {
        app: path.join(src, 'main.js'),
        vendor: Object.keys(require('../package').dependencies)
    },

    output: {
        path: path.join(root, 'dist'),
        publicPath: '/',
        filename: '[name].js'
    },

    node: process.env.NODE_ENV === 'test' ? { fs: 'empty' } : {},

    resolve: {
        modules: [path.resolve(root, 'node_modules')],
        alias: {
            _npm: path.join(root, 'node_modules'),
            _src: src,
            _app: app,
            _components: path.join(app, 'components'),
            _views: path.join(app, 'views'),
            _assets: path.join(src, 'assets'),
            _images: path.join(src, 'assets', 'images'),
            _scss: path.join(src, 'assets', 'scss'),
            _scss_components: path.join(src, 'assets', 'scss', 'components'),
            _scss_config: path.join(src, 'assets', 'scss', 'config'),
            _config: path.join(src, 'config'),
            _services: path.join(src, 'services'),
            _utils: path.join(src, 'utils')
        }
    },
    module: {
        noParse: /(promise)\.js$/,
        rules: [
            {
                enforce: 'pre',
                test: /.(vue|js)$/,
                loader: 'eslint-loader',
                exclude: /node_modules/
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: vueConf
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loaders: imgConf
            },
            {
                test: /\.(eot|otf|ttf|woff|woff2)(\?v=[a-z0-9=\.]+)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: '[name].[ext]?[hash]'
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin(htmlPlgConf),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        }),
        process.env.NODE_ENV === 'test'
            ? { apply () {} }
            : new webpack.optimize.CommonsChunkPlugin({
                names: ['vendor', 'manifest'],
                minChunks: Infinity
            })
    ]
}
