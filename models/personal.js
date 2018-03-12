var mongoose = require('mongoose');
var Schema = mongoose.Schema

var personalSchema = new Schema ({
  name: String,
  githubUsername: String,
  githubLink: String,
  personalSiteLink: String,
  currentCity: String
});

var personal = mongoose.model('personal', mySchema)

module.exports = personal;