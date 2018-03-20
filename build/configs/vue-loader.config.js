const path = require('path')

const root = path.join(__dirname, '..')
    , src = path.join(root, 'src')
    , app = path.join(src, 'app')

module.exports = {
    postcss: [
        require('autoprefixer')({
            browsers: ['last 4 versions', 'IE 11']
        })
    ]
}
