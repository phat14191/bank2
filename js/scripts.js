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

function Ticket(title, time, age, id, movie) {
  this.time  = time;
  this.age   = age;
  this.movie = movie;
}

Ticket.prototype.price = function () {
 var finalPrice = 0;
 //Add initial ticket price, based on first/second-run status:
 if (this.movie.run === "first") {
   finalPrice += 12;
 } else if (this.movie.run === "second") {
   finalPrice += 7.5;
 }
 //Adjust price if 3D or nah:
if (this.movie.threeD) {
  finalPrice += 5;
}
//Adjust price if user is a senior or child:\
//NOTE: An empty age field is tolerated and defaults to adult ticket prices. This seems like ideal behavior.
if (this.age < 11 || this.age >= 62) {
  finalPrice -= 2;
}
 //Adjust price if showtime is a matinee:
 //NOTE: Currently, this allows matinee and senior/child to stack. That's probably not how it works IRL. The change would be simple: implement this adjustment as an elseif to the above.
 if (Movie.prototype.parseTime(this.time) < 1745) {
   finalPrice -= 2;
 }
 return finalPrice;
};

Movie.prototype.parseTime = function(showtime) {
var splitTime = showtime.split(":");
var result = 0;
if ((showtime[5] === "P" || showtime[4] === "P") && splitTime[0] !== "12") {
  result += 1200;
  }
return result += parseInt(splitTime[0]) * 100 + parseInt(splitTime[1]);
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

/// User Interface Logic ///
$(function() {
  var userTicket = new Ticket();
  //Fill Movie List
  for (var i = 0; i < defaultTheatre.movies.length; i++) {
    $("ul#movie-list").append("<li id='" + i + "'>" + defaultTheatre.movies[i].title + "</li>");
    //Handler for "Click" on movie list:
    $("ul#movie-list li#" + i).click(function() {
      userTicket.movie = defaultTheatre.movies[$(this)[0].id];
      $("#output h3").text(defaultTheatre.movies[$(this)[0].id].title);
      $("#output ul").empty();
      for (var ii = 0; ii < defaultTheatre.movies[$(this)[0].id].showtimes.length; ii++) {
        $("#output ul").append("<li>" + defaultTheatre.movies[$(this)[0].id].showtimes[ii] + "</li>")
        //Handler for "Click" on movie times
        $("#output ul li").last().click(function() {
          userTicket.time = $(this).text();
          $("#price").text(userTicket.price());
        });
      }
    });
  }
  //Handler which updates age whenever user changes age field.
  $("input#age").keyup(function() {
    userTicket.age = parseInt($("input#age").val());
    if (userTicket.price()) {
      $("#price").text(userTicket.price());
    }
  });
});
