/// Business Logic ///
var

function Movie(title, showtimes, run, threeD) {
  this.title     = title;
  this.showtimes = showtimes;
  this.run       = run;
  this.threeD    = threeD;
}

function Ticket(title, time) {
  this.title = title;
  this.time  = time;
}

Ticket.prototype.price = function () {

};

/// User Interface Logic ///
$(function() {

});
