/// Business Logic ///
var moviesBackend = [
  ["Guardians of the Galaxy Vol. 2 3D",["11:15AM","2:30PM","6:00PM","10:20PM"], "first", true],
  ["Guardians of the Galaxy Vol. 2",["12:00PM","12:45PM","3:30PM","4:30PM","7:00PM","8:00PM","9:30PM"], "first", false],
  ["The Circle", ["11:00AM","1:45PM","4:15PM","7:15PM"], "first", false],
  ["The Fate of the Furious 3D",["12:15PM","3:45PM","7:00PM"], "first", true],
  ["The Fate of the Furious",["12:30PM","3:15PM","10:15PM"], "first", false],
  ["Get Out", ["4:45PM","7:00PM","9:15PM"], "second", false]
];

function Theater(movies) {
  this.movies = movies;
}

function Movie(title, showtimes, run, threeD) {
  this.title     = title;
  this.showtimes = showtimes;
  this.run       = run;
  this.threeD    = threeD;
}

function Ticket(title, time, age) {
  this.title = title;
  this.time  = time;
  this.age   = age;
}

Ticket.prototype.price = function () {

};

function parseTime() {

}

var defaultTheatre = new Theater([]);

for (var i = 0; i < moviesBackend.length; i++) {
  var newMovie = new Movie(
      moviesBackend[i][0],
      moviesBackend[i][1],
      moviesBackend[i][2],
      moviesBackend[i][3]);
  defaultTheatre.movies.push(newMovie);
}

console.log(defaultTheatre);

/// User Interface Logic ///
$(function() {
  for (var i = 0; i < defaultTheatre.movies.length; i++) {
    $("ul#movie-list").append("<li id='" + i + "'>" + defaultTheatre.movies[i].title + "</li>");
    $("ul#movie-list li#" + i).click(function() {
      $("#output h3").text(defaultTheatre.movies[$(this)[0].id].title);
      $("#output ul").empty();
      for (var i = 0; i < defaultTheatre.movies[$(this)[0].id].showtimes.length; i++) {
        $("#output ul").append("<li>" + defaultTheatre.movies[$(this)[0].id].showtimes[i] + "</li>")
      }
    });
  }
});
