const router = require('express').Router()
    , productService = require('./modules/products/products.service')

router.get('/products', function (req, res) {
    res.send(productService.list())
})

module.exports = router
