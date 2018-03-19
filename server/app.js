const app = require('express')()
    , cors = require('cors')
    , router = require('./routes')
    , port = (process.argv.find(arg => arg.match(/^PORT=\d{4}$/)) || 'PORT=8000')
        .replace('PORT=', '')

app.use(cors())
app.use(router)
app.use((err, req, res, next) => {
    const code = err.code || 500
        , error = err.message || err

    res.status(code).json({ error })
})

app.listen(port, () => {
    console.log(
        '\n%s\x1b[32m%s\x1b[0m',
        'Server listening on port ',
        `${port}\n`
    )
})
