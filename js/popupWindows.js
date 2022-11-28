// alert("Какая погода");
// var data = confirm("вы дома?");
// if(data){
//   alert("ВЫ МОЛОДЕЦ");
// }
// var data = prompt("Скажите сколько вам лет" , 18);
// console.log(data);
var person = null;
if(confirm("Вы точно уверены?")){
  person = prompt("Введите ваше имя");
  alert("Привет, " + person);
}else{
  alert("Вы нажали отмена");
}
