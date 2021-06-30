module.exports = (Model) => (req, res, next) => {
    Model.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(docs => res.status(200).json(docs))
        .catch(next)
}