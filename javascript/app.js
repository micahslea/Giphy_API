var actorArray = [
  "Jeff Bridges",
  "Daniel Day Lewis",
  "Brad Pitt",
  "Matt Damon",
  "Tom Hardy",
  "Leonardo DiCaprio",
  "Ann Hathaway",
  "Billy Bob Thornton",
  "Emma Stone",
  "Viola Davis",
  "Donald Glover",
  "Matthew Perry",
  "Lisa Kudrow",
  "Melissa McCarthy",
  "Mindy Kaling",
  "Kevin Hart",
  "Samuel L Jackson",
  "Jamie Foxx",
  "Aziz Ansari",
];
function createBtn() {
  $(".main").empty();
  for (var i = 0; i < actorArray.length; i++) {
    var btn = $("<button>");
    btn.attr("data-name", actorArray[i]);
    btn.attr("type", "button");
    btn.addClass("btn btn-info actors");
    btn.css({ margin: "10px" });
    btn.text(actorArray[i]);
    $(".main").append(btn);
    console.log(actorArray[i]);
  }
}

function gifDisplay() {
  var actor = $(this).attr("data-name");
  var queryUrl =
    "https://api.giphy.com/v1/gifs/search?q=" +
    actor +
    "&api_key=Ywd8cVPGWy0gcabPEMKgbkWXgOYrDcRr&&limit=10";

  $.ajax({
    url: queryUrl,
    method: "GET",
  }).then(function (response) {
    var results = response.data;

    for (var j = 0; j < results.length; j++) {
      var gifStill = results[j].images.fixed_height_still.url;

      var cardDiv = $("<div>");
      cardDiv.attr("class", "row row-cols-1 row-cols-md-3");
      var newDiv = $("<div>");
      newDiv.attr("class", "col mb-4");
      cardDiv.append(newDiv);
      var newerDiv = $("<div>");
      newerDiv.attr("class", "card h-100");
      newerDiv.append(newerDiv);
      var newImage = $("<img>");
      newImage.addClass("card-img-top gif");
      newImage.attr("src", gifStill);
      newImage.attr("data-animate", results[j].images.fixed_height.url);
      newImage.attr("data-still", results[j].images.fixed_height_still.url);
      newImage.attr("data-state", "still");
      newDiv.append(newImage);
      var cardBodyDiv = $(
        "<div><h5 class='card-title actorGif'></h5><p class='card-text ratings'></p></div>"
      );
      cardBodyDiv.attr("class", "card-body");
      newDiv.append(cardBodyDiv);

      $(".my-cards").prepend(cardDiv);

      var rating = results[j].rating;
      $(".ratings").text("Rating: " + rating);
      $(".actorGif").text(actor);
    }
  });
}
function animate() {
  var state = $(this).attr("data-state");

  if (state === "still") {
    $(this).attr("src", $(this).attr("data-animate"));
    $(this).attr("data-state", "animate");
  } else {
    $(this).attr("src", $(this).attr("data-still"));
    $(this).attr("data-state", "still");
  }
}
$("#addButton").on("click", function (event) {
  event.preventDefault();
  var newActor = $("#addInput").val().trim();
  if (newActor === undefined || newActor.length == 0) {
    return;
  } else {
    actorArray.push(newActor);
    createBtn();
  }
});
$(document).on("click", ".actors", gifDisplay);
$(document).on("click", ".gif", animate);
createBtn();
