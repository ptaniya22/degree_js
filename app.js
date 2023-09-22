let number = +prompt('Enter the number');
console.log('число = ', number);
let degree = +prompt('Enter the degree of number');
console.log('степень числа = ', degree);
let result = 1;

for (let i = 1; i <= Math.abs(degree); i++) {
  result = number * result;
}
if (degree < 0) {
  result = 1 / result;
}
// console.log('ответ = ', result);

//округление до сотых
let rounded = function (number) {
  return +number.toFixed(2);
};
//----------------

console.log('ответ = ', rounded(result));
