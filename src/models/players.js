const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlayersSchema = new Schema({
    name: String,
    nickname: String,
    email: String,
    country: String,
    games: String,
    gamelog: {
        date: String,
        duration: String,
        gameType: String,
        resultFinal: String        
    },
    stats: {
        wins: String,
        losses: String,
        equal: String,
    }
});

module.exports = mongoose.model('players', PlayersSchema);