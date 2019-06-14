const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FigthersSchema = new Schema({
    name: String,
    health: String,
    strength: String,
    super: String,
});

module.exports = mongoose.model('figthers', FigthersSchema);