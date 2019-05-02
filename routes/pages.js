const express = require('express')
const pagesController = require('../controller/pages')

const router = express.Router()

router.get('/', pagesController.home)
router.get('/about', pagesController.about)

module.exports = router

