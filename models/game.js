var mongoose = require('mongoose');
var Schema = mongoose.Schema

var gameSchema = new Schema ({
  title: String,
  genre: String,
  rating: String,
});

var Game = mongoose.model('Game', gameSchema)

module.exports = Game;