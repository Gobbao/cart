const path = require('path')

const root = path.join(__dirname, '..')
    , src = path.join(root, 'src')
    , app = path.join(src, 'app')

module.exports = {
    postcss: [
        require('autoprefixer')({
            browsers: ['last 4 versions', 'IE 11']
        })
    ],
    loaders: {
        scss: [
            'style-loader', 'css-loader',
            {
                loader: 'sass-loader',
                options: {
                    data: '@import "~_scss_config/_variables.scss";',
                    includePaths: [app]
                }
            }
        ]
    }
}
