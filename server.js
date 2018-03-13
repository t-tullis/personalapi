//Require Express In App
var express = require('express'),
    bodyParser = require('body-parser')

var app = express();


//config app
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

//Connecting to db models
var db = require('./models');

//-------------- DATA ------------------------
var games = [
  {
    _id: 1,
    title: 'Call of Duty WWII',
    genre: 'Shooter',
    rating: 'Mature'
  },
  {
    _id: 2,
    title: 'Counter-Strike:GO',
    genre: 'Shooter',
    rating: 'Mature'
  },
  {
    _id: 3,
    title: "PlayerUnknown's Battlegrounds",
    genre: 'Shooter',
    rating: 'Mature'
  },
  {
    _id: 4,
    title: 'NBA 2k18',
    genre: 'Sports',
    rating: 'Everyone'
  }
];

var newGameID = 5;

//--------------- ROUTES ------------------

//Root Route localhost:3000
app.get('/', function(req,res){
  res.sendFile(__dirname + '/views/index.html');
});

//getting all video games
app.get('/api/videogames', function(req,res){
  console.log('games index');
  res.json(games);
}); 

// Create new game
app.post('/api/videogames', function (req, res) {
 // create new book with form data (`req.body`)
  console.log('Games created', req.body);
  var newGame = req.body;
  newGame._id = newGameID++;
  games.push(newGame);
  res.json(newGame);
});

//Documented API EndPoints
app.get('/api/profile', function(req,res){
  base_url = 'https://blooming-retreat-98443.herokuapp.com/'
  documentation_url = 'https://github.com/t-tullis/personalapi' 
  
  res.json({
    'name': 'Terrell Tullis',
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


