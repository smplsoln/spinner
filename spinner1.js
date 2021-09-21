
let animStr = "|/-\\|/-\\|";
const spinner1 = function(sentence, i) {
  if (i <= sentence.length) {
    setTimeout(() => {
      let char = sentence.charAt(i);
      process.stdout.write('\r' + char);
      i++;
      spinner1(sentence, i++);
    }, 200);
  } else {
    process.stdout.write('\n');
  }
};

spinner1(animStr, 0);