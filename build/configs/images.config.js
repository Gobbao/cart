module.exports = [
    'url-loader?' + JSON.stringify({
        limit: 10000,
        name: '[name].[ext]?[hash]'
    })
]