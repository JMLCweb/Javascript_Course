array = [2, 3, 1, 4, 66, 9, 200, 1, 40, 3];
array.sort(); // sort apenas ordena o primeiro digito
console.log(array);

array.sort(function (a, b) {
  // ordena atraves da funçao qualquer digito
  return a - b;
});
console.log(array);
