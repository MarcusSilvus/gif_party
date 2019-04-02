
// Array of sea animals
var topics = ["octopus", "jellyfish", "seahorse", "shark", "dolphin"];


function createButton() {

  // Prevents duplicate buttons being created when adds a new button
  $("#buttons").empty();
  // Loop that cycles through the array and creates buttons
  for (var i = 0; i < topics.length; i++) {

    var buttonGen = $('<button>');
    buttonGen.addClass('topics');

    buttonGen.attr('gif-button', topics[i]);
    buttonGen.text(topics[i]);

    $('#buttons').append(buttonGen);
  };
};

// Creates the new button
$('#addSea').on('click', function (event) {

  event.preventDefault();

  var seaCreature = $('#seaInput').val().trim();

  // Pushes the value to the 'topics' array
  topics.push(seaCreature);

  createButton();
});




// Event handler that retrieves 10 gifs
//$('button').on('click', 
function gifParty() {
  // Varible
  var thing = $(this).attr('gif-button');
  // Varible for the API query
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    thing + "&api_key=CTIYyaADzGAhNxyC7wuygpfs2KvTq4MN&limit=10";

  $.ajax({
    url: queryURL,
    method: "GET"
  })
    .then(function (response) {
      console.log(response);

      var result = response.data;
      // console.log(result);

      for (var i = 0; i < result.length; i++) {
        var gifDiv = $('<div>');

        var rating = result[i].rating;
        console.log(rating);

        var p = $('<p>').text('Rating: ' + rating);

        var gifImage = $('<img>');
        gifImage.attr('src', result[i].images.fixed_height.url);

        gifDiv.prepend(p);
        gifDiv.prepend(gifImage);

        $('#gifDump').prepend(gifDiv);
      }
    });
};

 $(document).on('click', '.topics', gifParty);

 createButton();

