//есть вариант проще
// function check(el){
//     if(el==0){
//       conclusion.value += "0";
//       return;
//     }
//     switch (document.getElementsByClassName('button')[el-1].innerHTML) {
//       case "1":
//         conclusion.value += "1";
//         break;
//       case "2":
//         conclusion.value += "2";
//         break;
//       case "3":
//         conclusion.value += "3";
//         break;
//       case "4":
//         conclusion.value += "4";
//         break;
//       case "5":
//         conclusion.value += "5";
//         break;
//       case "6":
//         conclusion.value += "6";
//         break;
//       case "7":
//         conclusion.value += "7";
//         break;
//       case "8":
//         conclusion.value += "8";
//         break;
//       case "9":
//         conclusion.value += "9";
//         break;
//     }
// }

//что бы подсчитать разбей на элементы по типу +- и тд
//можно по отдельным функциям
//все что снизу нерабочие варианты
// function plus() {
//   var number1;
//   var number2;
//   if(!document.getElementById("conclusion").value == 0){
//     //if(document.getElementById("plus").onclick){
//       number = Number(document.getElementById("conclusion").value);
//       result += number;
//       document.getElementById("conclusion").value = "";
//       number2 = Number(document.getElementById("conclusion").value);
//       console.log(result);
//   //  }
//     // if(document.getElementById("minus").onclick){
//     //   number = Number(document.getElementById("conclusion").value)
//     //   result += number;
//     //   console.log(result);
//     //   document.getElementById("conclusion").value = "";
//     // }
//   }
// }
//   // var result = document.getElementById("conclusion").value;
//   // result *= Number(document.getElementById("conclusion").value);
//   // document.getElementById("conclusion").value = "";
// function minus(){
//   if(!document.getElementById("conclusion").value == 0){
//     var number1;
//     var number2;
//     number1 = Number(document.getElementById("conclusion").value);
//     console.log(number1);
//     document.getElementById("conclusion").value = "";
//     do{
//     number2 = Number(document.getElementById("conclusion").value);
//     console.log(number2);
//     }while(number2 == "")
//     result = number1 - number2;
//
//   }
// }
// function plus(){
//   var number = 0;
//   if(document.getElementById('plus').onclick){
//     if(!document.getElementById('conclusion').value == ""){
//       var number = Number(document.getElementById('conclusion').value);
//     }
//     if(!document.getElementById('conclusion').value == ""){
//       result += number;
//       console.log(result);
//     }
//     document.getElementById('conclusion').value = "";
//   }
// }
// function minus(){
//   var number = 0;
//   if(document.getElementById('minus').onclick){
//     if(!document.getElementById('conclusion').value == ""){
//       var number = Number(document.getElementById('conclusion').value);
//     }
//     if(!document.getElementById('conclusion').value == ""){
//       result -= number;
//       console.log(result);
//     }
//     document.getElementById('conclusion').value = "";
//   }
// }
//нерабочий вариант
//разделить функции получения значения и мат действий(нерабочий)
// var result = 0;
// var plus1 = new Array();
// function plus(){
//   conclusion.value += "+";
// }
// function minus(){
//   conclusion.value += "-";
// }
// function multiplication(){
//   conclusion.value += "*";
// }
// function division(){
//   conclusion.value += "/";
// }
// function modulo(){
//   conclusion.value += "%";
// }
// function calculate(){
//   plus1 = conclusion.value;
//   console.log(plus1);
//   plus1 = plus1.split('+');
//   console.log(plus1);
//   var minus1 = plus1.split('-');
//   console.log(plus1);
// }
//рабочий вариант

let conclusion = document.getElementById("conclusion");
function calc() {
  conclusion.value = eval(conclusion.value);
}
function press(x) {
  conclusion.value += x;
}
function reset() {
  conclusion.value = "";
}