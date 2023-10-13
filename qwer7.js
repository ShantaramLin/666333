const number = 12345;
let sum = 0;

const digits = number.toString().split('');

for (let i = 0; i < digits.length; i++) {
  sum += parseInt(digits[i]);
}

console.log("Сумма цифр числа: " + sum);