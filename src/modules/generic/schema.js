const mongoose = require("../../config/database");

const schema = new mongoose.Schema({
    active: { type: Boolean, default: true },
    name: { type: String, required: 'Name is required' },
    description: { type: String, required: 'Description is required' },
})
module.exports = schema