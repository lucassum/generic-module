module.exports = (Model) => (req, res, next) => {
    Model.findByIdAndUpdate(req.params.id, { active: false })
        .then(docs => res.status(204).send())
        .catch(next)
}