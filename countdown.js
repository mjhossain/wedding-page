// Months start at 0 and the timer caluclates to Midnight
// use month - 1 to get an accurate count down

let ed = new Date(2018, 8-1, 9);

function setup() {
  pixelDensity(2.0);
  let canvas = createCanvas(320, 70);
  angleMode(DEGREES);
  canvas.parent('sketch-holder');
}

function draw() {
  let timer = getTimer();
  clear();

  if (timer.days.text <= 0 && timer.hours.text <= 0 && (timer.minutes.text) <= 0 && (timer.seconds.text) <= 0) {
    let zeroTime = {
      "days": {
        "text": 0,
        "remain": 0,
        "map": -89
      },
      "hours": {
        "text": 0,
        "remain": 0,
        "map": -89
      },
      "minutes": {
        "text": 0,
        "remain": 0,
        "map": -89
      },
      "seconds": {
        "text": 0,
        "remain": 0,
        "map": -89
      },
      "milli": {
        "text": -89
      }
    };

    shapeCreator(zeroTime);

  } else {
    shapeCreator(timer);
  }


}

function shapeCreator(timer) {
  stroke(220);
  strokeWeight(1);
  fill(255);
  ellipse(47, 35, 65, 65);
  ellipse(122, 35, 65, 65);
  ellipse(197, 35, 65, 65);
  ellipse(272, 35, 65, 65);

  stroke(48, 188, 200);
  noFill();
  strokeWeight(3);
  strokeCap(ROUND);

  arc(47, 35, 65, 65, 270, timer.days.map);
  arc(122, 35, 65, 65, 270, timer.hours.map);
  arc(197, 35, 65, 65, 270, timer.minutes.map);
  arc(272, 35, 65, 65, 270, timer.seconds.map);

  textSize(24);
  textAlign(CENTER);
  textFont('DINPro-Light');
  noStroke();
  fill(48, 188, 200);

  text(Math.round(timer.days.text), 47, 37);
  text(Math.round(timer.hours.text), 122, 37);
  text(Math.round(timer.minutes.text), 197, 37);
  text(Math.round(timer.seconds.text), 272, 37);

  textSize(10);
  textAlign(CENTER);
  fill(125);
  text("DAYS", 47, 52);
  text("HOURS", 122, 52);
  text("MINS", 197, 52);
  text("SECS", 272, 52);
}

function getTimer() {
  let d = new Date();

  let distance = ed.getTime() - d.getTime();

  let days = distance / (1000*60*60*24);
  Math.floor(days) != 0 ? hmsms = days % Math.floor(days) : hmsms = days;  // hmsms - hours, minutes, seconds, milliseconds remaining
  let daysText = Math.floor(days);

  let hours = hmsms * 24;
  Math.floor(hours) != 0 ? msms = hours % Math.floor(hours) : msms = hours;  // msms - minutes, seconds, milliseconds remaining
  let hoursText = Math.floor(hours);

  let minutes = msms * 60;
  Math.floor(minutes) != 0 ? sms = minutes % Math.floor(minutes) : sms = minutes;  // sms - seconds, milliseconds remaining
  let minutesText = Math.floor(minutes);

  let seconds = sms * 60;
  Math.floor(seconds) != 0 ? ms = seconds % Math.floor(seconds) : ms = seconds;  // ms - milliseconds remaining
  let secondsText = Math.floor(seconds);

  let milliText = Math.round(ms * 1000);
  let milli = ms * 1000;

  let finalTime = {
    "days": {
      "text": daysText,
      "remain": hmsms,
      "map": map(days, 365, 0, 269, -89)
    },
    "hours": {
      "text": hoursText,
      "remain": msms,
      "map": map(hours*24, 1440, 0, 269, -89)
    },
    "minutes": {
      "text": minutesText,
      "remain": sms,
      "map": map(minutes*60, 3600, 0, 269, -89)
    },
    "seconds": {
      "text": secondsText,
      "remain": ms,
      "map": map(seconds*1000, 60000, 0, 269, -89)
    },
    "milli": {
      "text": milliText
    }
  };

  return finalTime;
}
