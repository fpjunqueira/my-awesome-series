const path = require('path')
const bodyParser = require('body-parser')
const express = require('express')
const mongoose = require('mongoose')

// routes
const pagesRouter = require('./routes/pages')
const seriesRouter = require('./routes/series')

// environments
const port = process.env.PORT || 3000
const mongo = process.env.MONGODB || 'mongodb://localhost/my-awesome-series'

// mongo configs
mongoose.Promise = global.Promise

// express configs
const app = express()
// process request body
app.use(bodyParser.urlencoded({ extended: true }))
// assets
app.use(express.static('public'))
// view engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use('/', pagesRouter)
app.use('/series', seriesRouter)

mongoose
    .connect(mongo, { useNewUrlParser: true })
    .then(() => {
        app.listen(port, () => {
            console.log(`Listening on port: ${port}`)
        })
    })
    .catch(e => {
        console.log(e)
    })