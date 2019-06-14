const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StagesSchema = new Schema({
    name: String,
    country: String,
    size: String
});

module.exports = mongoose.model('stages', StagesSchema);