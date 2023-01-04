function check(el){
    if(el==0){
      conclusion.value += "0";
      return;
    }
    switch (document.getElementsByClassName('button')[el-1].innerHTML) {
      case "1":
        conclusion.value += "1";
        break;
      case "2":
        conclusion.value += "2";
        break;
      case "3":
        conclusion.value += "3";
        break;
      case "4":
        conclusion.value += "4";
        break;
      case "5":
        conclusion.value += "5";
        break;
      case "6":
        conclusion.value += "6";
        break;
      case "7":
        conclusion.value += "7";
        break;
      case "8":
        conclusion.value += "8";
        break;
      case "9":
        conclusion.value += "9";
        break;
    }
}
//что бы подсчитать разбей на элементы по типу +- и тд
//можно по отдельным функциям
var result = 0;
function mathAction() {
  var number;
  if(!document.getElementById("conclusion").value == 0){
    if(document.getElementById('plus').onclick){
      number = 
      result += Number(document.getElementById("conclusion").value);
      console.log(result);
      document.getElementById("conclusion").value = "";
    }
    if(document.getElementById('minus').onclick){

      result -= Number(document.getElementById("conclusion").value);
      console.log(result);
      document.getElementById("conclusion").value = "";
    }
  }
}
  // var result = document.getElementById("conclusion").value;
  // result *= Number(document.getElementById("conclusion").value);
  // document.getElementById("conclusion").value = "";
