module.exports = (Model) => (req, res, next) => {
    Model.findOne({ _id: req.params.id, active: true })
        .then(docs => res.status(200).json(docs))
        .catch(next)
}