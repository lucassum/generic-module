
/**
 * This route will respond greetings to name in json request body.
 * @route GET /generic
 * @group /generic - Módulo genérico
 * @returns {Array} 200 - An array of objects
 * @returns {Error}  default - Unexpected error
 * @produces application/json
 */
module.exports = (Model) => (req, res, next) => {
    let query = req.query
    query.active = query.active !== false

    Model.find(query)
        .then(docs => res.status(200).json(docs))
        .catch(next)
}