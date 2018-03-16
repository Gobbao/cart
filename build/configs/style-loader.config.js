const path = require('path')

const root = path.join(__dirname, '..')
    , src = path.join(root, 'src')

module.exports = [
    {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
    },
    {
        test: /\.scss$/,
        use: [
            'style-loader',
            'css-loader',
            {
                loader: 'sass-loader',
                options: {
                    data: '@import "~_scss_config/_variables.scss";',
                    includePaths: [path.join(src, 'assets', 'scss')]
                }
            }
        ]
    }
]
