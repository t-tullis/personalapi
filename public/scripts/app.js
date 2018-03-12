console.log("JS is lit!");
var $gamesList;
var allGames = [];

$(document).ready(function(){
  $gamesList = $('#gameListTarget')

  $.ajax({
    method: 'GET',
    url: '/api/games',
    success: handleSuccess,
    error: handleError
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

  function render(){
    $gamesList.empty();
  }