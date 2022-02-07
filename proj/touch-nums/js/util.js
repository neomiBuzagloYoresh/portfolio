function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function shuffle(items) {
  console.log('items', items);
  var randIdx, keep, i;
  for (i = items.length - 1; i > 0; i--) {
    randIdx = getRandomInt(0, items.length - 1);

    keep = items[i];
    items[i] = items[randIdx];
    items[randIdx] = keep;
  }
  return items;
}


var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalSeconds = 0;


function presentTimer() {
  var currTime = (Date.now() - gStartTime) / 1000;
  const elTimer = document.querySelector('.timer');
  elTimer.innerText = `Timer: ${currTime}`;
}

function startTimer() {
  gIsFirstClick = false;
  console.log('gIsFirstClick', gIsFirstClick);
  gStartTime = Date.now();
  gTimerInterval = setInterval(presentTimer, 1);
}


// function countTime() {
//         var display = ' '
//         gTimePassedInSeconds++
//         if (gTimePassedInSeconds > 60) {
//             const seconds = ((gTimePassedInSeconds % 60) < 10) ? '0' + gTimePassedInSeconds % 60 : gTimePassedInSeconds % 60
//             display = parseInt(gTimePassedInSeconds / 60) + ' : ' + seconds
//         } else display = gTimePassedInSeconds
//         return display
//     }
