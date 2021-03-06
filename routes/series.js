const express = require('express')
const seriesController = require('../controller/series')

const router = express.Router()

const Serie = require('../models/serie')
const models = {
    Serie
}

// inject models as dependency for controllers
router.get('/', seriesController.index.bind(null, models))
router.get('/new', seriesController.newForm)
router.post('/new', seriesController.newProcess.bind(null, models))
router.get('/delete/:id', seriesController.remove.bind(null, models))
router.get('/edit/:id', seriesController.editForm.bind(null, models))
router.post('/edit/:id', seriesController.editProcess.bind(null, models))

module.exports = router