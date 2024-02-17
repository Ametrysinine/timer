const arguments = process.argv.slice(2);

const beep = function() {
  process.stdout.write('\x07');
};

for (const argument of arguments) {
  if (isNaN(argument)) { // Skip if not number
    continue;
  } else if (argument < 0) { // Skip if negative number
    continue;
  } else setTimeout(beep, argument * 1000); // Beep every {number} seconds
}

