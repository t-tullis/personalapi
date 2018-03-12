var express = require('express'),
    bodyParser = require('body-parser'),
    app = express();


//config app
app.set('views', `${__dirname} views`);
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));


//Routes
app.get('/', function(req,res){
  res.sendFile(__dirname + '/views/index.html');
})

app.listen(process.env.PORT || 3000, function(){
  console.log('Server is running')
})

