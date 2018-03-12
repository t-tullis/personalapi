var express = require('express'),
    bodyParser = require('body-parser'),
    app = express();


//config app
app.set('views', `${__dirname} views`);
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));


//Routes

//Root Route localhost:3000
app.get('/', function(req,res){
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/api', function(req,res){
  base_url = 'https://blooming-retreat-98443.herokuapp.com/'
  
  res.json({'base_url':base_url})
})


//Server Setup
app.listen(process.env.PORT || 3000, function(){
  console.log('Server is running')
})



