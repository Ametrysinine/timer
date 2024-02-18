const arguments = process.argv.slice(2);
let timers = [];

for (const argument of arguments) {
  if (isNaN(argument)) { // Skip if not number
    continue;
  } else if (argument < 0) { // Skip if negative number
    continue;
  } else timers.push(argument); // Beep every {number} seconds
}

timers.sort((a, b) => a - b);

const beep = function() {
  process.stdout.write(`${timers}                                                        \r`)
  if (timers[0] === 0) {
    process.stdout.write('\x07');
    timers.shift();
    process.stdout.write(`TIMER!                                                         \r`);
  }
  timers = timers.map(x => (x - 1));

  if (timers.length === 0) {
  clearInterval(beeper); 
  }
};


console.log(timers);
const beeper = setInterval(beep, 1000);
beeper;