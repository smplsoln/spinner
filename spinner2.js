

const spinner2 = function(sentence, charIndex, delayMilliSecs) {
  if (charIndex <= sentence.length) {
    setTimeout(() => {
      let char = sentence.charAt(charIndex);
      process.stdout.write('\r' + char);
      charIndex++;
      spinner2(sentence, charIndex++, delayMilliSecs);
    }, delayMilliSecs);
  } else {
    // process.stdout.write('\n');
  }
};

const spinner = function(animStr, delayMilliSecs) {
  spinner2(animStr, 0, delayMilliSecs);
};

let countDown = "9876543210A^";
let charSpinStr = "|/-\\|/-\\|";
let animStr = charSpinStr + countDown + '\n';

spinner(animStr, 400);
