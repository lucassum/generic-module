const create = (Model) => (req, res, next) => {
    Model.create(req.body)
        .then(doc => res.status(201).json(doc))
        .catch(next)
}
const find = (Model) => (req, res, next) => {
    let query = req.query
    if (!query.active) query.active = true
    Model.find(query)
        .then(docs => res.status(200).json(docs))
        .catch(next)
}

const findById = (Model) => (req, res, next) => {
    Model.findOne({ _id: req.params.id, active: true })
        .then(docs => res.status(200).json(docs))
        .catch(next)
}

const remove = (Model) => (req, res, next) => {
    Model.findByIdAndUpdate(req.params.id, { active: false })
        .then(docs => res.status(204).send())
        .catch(next)
}

const update = (Model) => (req, res, next) => {
    Model.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(docs => res.status(200).json(docs))
        .catch(next)
}



module.exports = { create, find, findById, remove, update }