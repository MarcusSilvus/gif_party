

// Retrieves 10 gifs
// $("button").on("click", function() {
//     var person = $(this).attr("gif-button");
//     var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
//       person + "&api_key=CTIYyaADzGAhNxyC7wuygpfs2KvTq4MN&limit=10";

//     $.ajax({
//       url: queryURL,
//       method: "GET"
//     })
//       .then(function(response) {
//         console.log(response);
        
//         var results = response.data;

//         for (var i = 0; i < results.length; i++) {
//           var gifDiv = $("<div>");

//           var rating = results[i].rating;

//           var p = $("<p>").text("Rating: " + rating);

//           var personImage = $("<img>");
//           personImage.attr("src", results[i].images.fixed_height.url);

//           gifDiv.prepend(p);
//           gifDiv.prepend(personImage);

//           $("#gifDump").prepend(gifDiv);
//         }
//       });
//   });

  $('button').on('click', function () {
    var thing = $(this).attr('gif-button');
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    thing + "&api_key=CTIYyaADzGAhNxyC7wuygpfs2KvTq4MN&limit=10";

    $.ajax({
      url: queryURL,
      method: "GET"
    })
    .then(function(response) {
      console.log(response);
      
    })

  });