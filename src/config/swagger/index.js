module.exports = (app, dir) => require('express-swagger-generator')(app)(require('./config')(dir))
