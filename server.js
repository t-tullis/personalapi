//Require Express In App
var express = require('express'),
    bodyParser = require('body-parser'),
    app = express();


//config app
app.set('views', `${__dirname} views`);
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

//Connecting to db models
var db = require('./models');

//Routes

//Root Route localhost:3000
app.get('/', function(req,res){
  res.send('HELLO WORLD!');
});

//profile route
app.get('/api/profile', function(req,res){
  res.sendFile(__dirname + '/views/index.html');
});

//getting all video games
app.get('/api/videogames', function(req,res){
  res.sendFile(__dirname + '/views/games.html');
})

//Documented API EndPoints
app.get('/api', function(req,res){
  base_url = 'https://blooming-retreat-98443.herokuapp.com/'
  documentation_url = 'https://github.com/t-tullis/personalapi' 
  
  res.json({
    'documentation_url': documentation_url,
    'base_url': base_url,
    'endpoints':[
    {
    'method': 'GET',
    'path': '/api',
    'description': 'Describes all available endpoints'
  },
  {
    'method': 'GET',
    'path': '/',
    'description': 'Who I am and Where I am from'
  },
  {
    'method': 'GET',
    'path': '/api/videogames',
    'description': 'List of all video games I currently play'
  },
  {
    'method': 'POST',
    'path': '/api/videogames',
    'description': 'Add a new game'
  },
  {
    'method': 'PUT',
    'path': '/api/videogames/:id',
    'description': 'Edit video game entry'
  },
  {
    'method': 'DELETE',
    'path': '/api/videogames/:id',
    'description': 'Delete video game'
  }
  ]

  });
});




//Server Setup
app.listen(process.env.PORT || 3000, function(){
  console.log('Server is running')
})


