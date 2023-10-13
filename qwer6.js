const number = 12345;

const firstDigit = parseInt(number.toString().charAt(0));
const lastDigit = parseInt(number.toString().slice(-1));

const sum = firstDigit + lastDigit;
console.log("Сумма первой и последней цифры: " + sum);