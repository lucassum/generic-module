const mongoose = require("../../config/database");
const path = require('path')

const MODULE = path.basename(__dirname)

const Model = mongoose.model(MODULE, require('./schema'))
module.exports = Model