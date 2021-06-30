module.exports = (Model) => (req, res, next) => {
    Model.create(req.body)
        .then(doc => res.status(201).json(doc))
        .catch(next)
}