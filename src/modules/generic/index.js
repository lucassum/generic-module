const RouteGenerator = require("../../config/route-generator")
const Model = require("./model")
const routes = require("./routes")

const Router = require('express').Router()

routes.forEach(route => {
    RouteGenerator.generateRoutes({ Router, route, action: require(`./actions/${route.action}`)(Model) })
})
module.exports = Router 