var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Personal-App');
mongoose.Promise = global.Promise;