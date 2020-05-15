var actorArray = [
  "Jeff Bridges",
  "Daniel Day Lewis",
  "Brad Pitt",
  "Matt Damon",
  "Tom Hardy",
  "Leonardo DiCaprio",
];

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

var actor = actorArray[i];
var gifStill;
var gifAnimate;

var queryUrl =
  "https://api.giphy.com/v1/gifs/search?api_key=Ywd8cVPGWy0gcabPEMKgbkWXgOYrDcRr&q=" +
  actor +
  "&limit=10";
var display = $(
  "<div class='row row-cols-1 row-cols-md-3'><div class='col mb-4'><div class='card h-100'><img src='" +
    gifStill +
    "' class='card-img-top' alt='...'><div class='card-body'><h5 class='card-title'>" +
    name +
    "</h5><p class='card-text'>This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p></div></div></div></div>"
);
$(".main").append(response);

btn.on("click", function () {
  $.ajax({
    url: queryUrl,
    method: "GET",
  }).then(function (data) {
    var results = response.data;

    for (var i = 0; i < response.length; i++) {}
  });
});
