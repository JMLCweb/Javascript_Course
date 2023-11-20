
//__...
var num1 = 1;
var num2 = "2";
var num3 = Number("3");
console.log(num1);
console.log(num2);
console.log(num3);
console.log(typeof num1);
console.log(typeof num2);
console.log(typeof num3);
var num4 = Number(num2);
console.log(num4);
console.log(typeof num4);
// --...
var num2 = "1";
var num4 = Number(num2);
if (!Number.isNaN(num4)) {
  console.log(num4);
  console.log(typeof num4);
}
//...
var num2 = 22;
var num3 = 3;
var num6 = num3 / num2;
console.log(num6); // 0.1363636363636
console.log(num6.toFixed(2));
console.log(num6.toString(2)); //em binário
//...
