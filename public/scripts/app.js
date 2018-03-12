console.log("JS is lit!");
var $gamesList;
var allGames = [];

$(document).ready(function(){
  $gamesList = $('#gameListTarget')

  $.ajax({
    method: 'GET',
    url: '/api/videogames',
    success: handleSuccess,
    error: handleError
  });

  $('#newGameForm').on('Submit',function(e){
    e.preventDefault();
    console.log('new game added/serialized', $(this).serializeArray());
    $.ajax({
      method: 'POST',
      url: '/api/videogames',
      data: $(this).serializeArray(),
      success: newGameSuccess,
      error: newGameError
    });
  });
});

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

  function render(){
    $gamesList.empty();
  }