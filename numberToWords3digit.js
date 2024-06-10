const numberToWords3digit = (number) => {
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
    'ten',
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
  if (number === 0) return 'zero';

  let word = '';
  while (number > 0) {
    if (number >= 100) {
      word += ones[Math.floor(number / 100)] + ' hundred ';
      number %= 100;
    } else if (number >= 20) {
      word += tens[Math.floor(number / 10)];
      number %= 10;
    } else if (number < 20 && number >= 10) {
      word += teens[number - 10];
      number = 0;
    } else if (number > 0) {
      word += ' ' + ones[number];
      number = Math.floor(number / 10);
    }
  }

  return word;
};

console.log(numberToWords3digit(115)); // "one hundred"
console.log(numberToWords3digit(123)); // "one hundred ten"
console.log(numberToWords3digit(959));
