var number = 15;
var isHasHouse = true;


if(number == 5 || !isHasHouse){
  console.log("ok");
}else if (number < 10) {
  console.log("ok!");
}else if (number == 7) {
  console.log("7");
}else if (number >= 15) {
  console.log(">= 15");
}else{
  console.log("Error!");
}

var str = "word";
switch (str) {
  case "4":
    console.log("4");
    break;
  case "45":
    console.log("45");
    break;
  case "word":
    console.log("worddd");
    break;
  default:
    console.log("Error");
}
