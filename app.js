


var lessTenPrice = 100;
var lessTwentyPrice = 80;
var upToTwenty = 50;

var lessTen = 10 * lessTenPrice;
var lessTwenty = 10 * lessTwentyPrice;
var day = prompt("Enter Your Day : ");

if (day <= 10) {
  document.write(day * lessTenPrice);
}
else if (day <= 20 && day > 10) {
  var countOne = day - 10;
  var lessT = countOne * lessTwentyPrice;
  document.write(lessT + lessTen);
}

else if (day > 20) {
  var countTwo = day - 20;
  var countTwoTotal = countTwo * upToTwenty;
  document.write(countTwoTotal + lessTen + lessTwenty);
}

else {
document.write("<h1>You have enterd invalid number!</h1>");
}
