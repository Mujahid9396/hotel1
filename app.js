// var x = 10;
// while (x < 15) {
//   document.write(x + " <br>");
//   x++;
// }

// function price(x, y, z) {
//   var clock = x * 100;
//   var phone = y * 800;
//   var laptop = z * 1500;
//   var total = clock + phone + laptop;
//   return total;
// }

// var result = price(3, 2, 12);
// document.write(result);
// var faseOne = 10 * 100;
// var faseTwo = 10 * 80;
// var lessTwo = faseTwo + faseTwo;
// var day = 21;
// if (day <= 10) {
//   document.write(day * 100);
// } else if (day <= 20 && day > 10) {
//   var first = day - 10;
//   var offerOne = first * 80;
//   var offerOneTotal = offerOne + faseOne;
//   document.write(offerOneTotal);
// } else if (day > 20) {
//   var second = day - 20;
//   var offerTwo = second * 50;

//   // document.write(offerTwo);

//   var total = lessTwo + offerTwo;
//   document.write(total);

//   // var offerTwoTotal = faseOne + faseTwo + offerTwo;
//   // document.write(offerTwo);
// }

var lessTenPrice = 100;
var lessTwentyPrice = 80;
var upToTwenty = 50;

var lessTen = 10 * lessTenPrice;
var lessTwenty = 10 * lessTwentyPrice;
var day = prompt("Enter Your Day : ");

if (day <= 10) {
  document.write(day * lessTenPrice);
}
if (day <= 20 && day > 10) {
  var countOne = day - 10;
  var lessT = countOne * lessTwentyPrice;
  document.write(lessT + lessTen);
}

if (day > 20) {
  var countTwo = day - 20;
  var countTwoTotal = countTwo * upToTwenty;
  document.write(countTwoTotal + lessTen + lessTwenty);
}
