var mongoose = require('mongoose');
mongoose.connect( process.env.MONGODB_URI || 3000, function(){
  console.log('Server is running')
});

mongoose.Promise = global.Promise;

module.exports.Game = require('./game.js')