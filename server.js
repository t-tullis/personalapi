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
    'path': '/profile',
    'description': 'Who I am and Where I am from'
  }

    ]
  });
});


//Server Setup
app.listen(process.env.PORT || 3000, function(){
  console.log('Server is running')
})


