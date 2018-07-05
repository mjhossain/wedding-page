// Count Down clock

var clock;

$(document).ready(function() {

  // Grab the current date
  var currentDate = new Date();
  console.log(currentDate);
  // Set some date in the future. In this case, it's always Jan 1
  // var futureDate  = new Date(currentDate.getFullYear() + 1, 0, 1);
  //                        Year, Day, Month, Hr, Min, Sec
  var futureDate = new Date(2018, 6, 7, 12, 0, 0);

  // Calculate the difference in seconds between the future and current date
  var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;

  // Instantiate a coutdown FlipClock
  clock = $('.clock').FlipClock(diff, {
    clockFace: 'DailyCounter',
    countdown: true
    // showSeconds: false
  });
});
