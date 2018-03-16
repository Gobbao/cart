const webpack   = require('webpack')
    , path      = require('path')
    , base      = require('./webpack.base.config')
    , vueConfig = require('./configs/vue-loader.config')
    , imgConfig = require('./configs/images-config')

const config = Object.assign({}, base, {
    plugins: (base.plugins || []).concat([
        // strip comments in Vue code
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
            'process.env.BROWSER': 'true'
        }),
        // extract vendor chunks for better caching
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'client-vendor-bundle.js'
        })
    ])
})

module.exports = config
