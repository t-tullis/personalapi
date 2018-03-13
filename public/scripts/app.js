console.log("JS is lit!");
var $gamesList;
var allGames = [];

$(document).ready(function(){
  $gamesList = $('#gameListTarget');

  $.ajax({
    method: 'GET',
    url: '/api/videogames',
    success: handleSuccess,
    error: handleError
  });

  $('#newGameForm').on('Submit',function(e){
    e.preventDefault();
    $.ajax({
      method: 'POST',
      url: '/api/videogames',
      data: $(this).serialize(),
      success: newGameSuccess,
      error: newGameError
    });
  });

  $gamesList.on('click', '.deleteBtn', function() {
    console.log('clicked delete button to', '/api/videogames/'+$(this).attr('data-id'));
    $.ajax({
      method: 'DELETE',
      url: '/api/videogames/'+$(this).attr('data-id'),
      success: deleteGameSuccess,
      error: deleteGameError
    });
  });

});

function getGameHtml(game) {
  return `<hr>
          <p>
            <b>Title: ${game.title}</b>
            <br>
            Genre:${game.genre}
            <br>
            Rating:${game.rating}
            <button type="button" name="button" class="deleteBtn btn btn-danger pull-right" data-id=${game._id}>Delete</button>
          </p>`;  
  }

  function getAllGamesHtml(games){
    return games.map(getGameHtml).join('');
  }
  
  function render(){
    $gamesList.empty();

    var gamesHtml = getAllGamesHtml(allGames);

    $gamesList.append(gamesHtml)

  };

  function handleSuccess(json){
    allGames = json;
    render();
  }

  function handleError(e){
    console.log('Troubleeeeeee!');
    $('#gameListTarget').text('Games didnt load, Check if server is running');
  }

  function newGameSuccess(json){
    $('#newGameForm input').val('');
    allGames.push(json);
    render();
  }

  function newGameError(){
    console.log('new game wasnt added. ERROR!')
  }

  function deleteGameSuccess(json) {
  var game = json;
  console.log(json);
  var gameId = game._id;
  console.log('deleted game', gameId);

  for(var i = 0; i < allGames.length; i++) {
    if(allGames[i]._id === gameId) {
      allGames.splice(i, 1);
      break;  
    }
  }
  render();
}


