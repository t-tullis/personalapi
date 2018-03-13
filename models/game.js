var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GameSchema = new Schema ({
  title: String,
  genre: String,
  rating: String
});

var Game = mongoose.model('Game', GameSchema)

module.exports = Game;