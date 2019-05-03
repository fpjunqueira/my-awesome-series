const labels = [{
    id: 'watching', 
    name: 'Watching'
}, {
    id: 'watched', 
    name: 'Watched', 
}, {
    id: 'to-watch',
    name: 'To Watch'
}]

const index = ({ Serie }, req, res) => {
    Serie.find({}, (err, docs) => {
        res.render('series/index', { series: docs, labels })
    })
}

const newProcess = ({ Serie }, req, res) => {
    const serie = new Serie(req.body)
    serie.save(() => {
        res.redirect('/series')
    })
}

const newForm = (req, res) => {
    res.render('series/new')
}

const editProcess = ({ Serie }, req, res) => {
    Serie.findOne({ _id: req.params.id }, (err, serie) => {
        serie.name = req.body.name
        serie.status = req.body.status
        serie.save()
        res.redirect('/series')
    })
}

const editForm = ({ Serie }, req, res) => {
    Serie.findOne({ _id: req.params.id }, (err, serie) => {
        res.render('series/edit', { serie, labels })
    })
}

const remove = ({ Serie }, req, res) => {
    Serie.deleteOne({
        _id: req.params.id
    }, (err) => {
        res.redirect('/series')
    })
}

module.exports = {
    index,
    newProcess,
    newForm,
    remove,
    editForm,
    editProcess
}