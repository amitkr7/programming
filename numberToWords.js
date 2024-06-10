const ones = [
  '',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
];
const teens = [
  '',
  'eleven',
  'twelve',
  'thirteen',
  'fourteen',
  'fifteen',
  'sixteen',
  'seventeen',
  'eighteen',
  'nineteen',
];
const tens = [
  '',
  'ten',
  'twenty',
  'thirty',
  'forty',
  'fifty',
  'sixty',
  'seventy',
  'eighty',
  'ninety',
];
const thousands = ['', 'thousand', 'million', 'billion'];

const numberToWords = (number) => {
  if (number === 0) return 'zero';
  let word = '';
  let thousandCounter = 0;
  while (number > 0) {
    let rem = number % 1000;
    if (rem > 0) {
      word =
        remToWord(rem) +
        (thousands[thousandCounter] ? ' ' + thousands[thousandCounter] : '') +
        ' ' +
        word;
    }
    number = Math.floor(number / 1000);
    thousandCounter++;
  }
  return word.trim();
};

const remToWord = (rem) => {
  let word = '';
  if (rem >= 100) {
    word += ones[Math.floor(rem / 100)] + ' hundred ';
    rem %= 100;
  }
  if (rem >= 20) {
    word += tens[Math.floor(rem / 10)];
    rem %= 10;
  }
  if (rem > 10 && rem < 20) {
    word += teens[rem - 10];
  } else if (rem === 10) {
    word += 'ten ';
  } else if (rem > 0) {
    word += ' ' + ones[rem];
  }
  return word.trim();
};

// console.log(numberToWords(100)); // "one hundred"
// console.log(numberToWords(101)); // "one hundred one"
// console.log(numberToWords(95)); // "ninety five"
// console.log(numberToWords(1234)); // "one thousand two hundred thirty four"
// console.log(numberToWords(0)); // "zero"
console.log(numberToWords(10005)); // "ten thousand five"
// console.log(numberToWords(1000000));
