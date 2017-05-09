/// Business Logic ///
var moviesBackend = [
  ["Guardians of the Galaxy Vol. 2 3D",["11:15AM","2:30PM","6:00PM","10:20PM"], "first", true],
  ["Guardians of the Galaxy Vol. 2",["12:00PM","12:45PM","3:30PM","4:30PM","7:00PM","8:00PM","9:30PM"], "first", false],
  ["The Circle", ["11:00AM","1:45PM","4:15PM","7:15PM"], "first", false],
  ["The Fate of the Furious 3D",["12:15PM","3:45PM","7:00PM"], "first", true],
  ["The Fate of the Furious",["12:30PM","3:15PM","10:15PM"], "first", false],
  ["Get Out", ["4:45PM","7:00PM","9:15PM"], "second", false]
];

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

/// User Interface Logic ///
$(function() {
  for (var i = 0; i < moviesBackend.length; i++) {
    $("ul#movie-list").append("<li>" + moviesBackend[i][0] + "</li>");
  }
});
