var text = document.getElementById('text');
text.title = "New text"
console.log(text.title);

text.style.color = "red";
text.style.backgroundColor = "blue";

text.innerHTML = "New<br>string";

// document.getElementById('text').style.color = "white";

//var spans = document.getElementsByTagName('span');

var spans = document.getElementsByClassName('simple-text')

for(var i = 0; i < spans.length; i++){
  console.log(spans[i].innerHTML);
}
function check() {
  var inputs = document.getElementsByTagName('input');
  for (let i = 0; i < inputs.length; i++ ) {
    if (inputs[i].value === '')
      return alert("Заполните все поля");
  }
  return alert("Все поля заполнены");
}
document.getElementById("main-form2").addEventListener("submit", checkForm);
function checkForm(event) {
  event.preventDefault();
  var el = document.getElementById('main-form2');

  var name = el.name.value;
  var pass = el.pass.value;
  var repass = el.repass.value;
  var state = el.state.value;

  var fail = "";

  if(name == "" || pass == "" || state == "")
    fail = "Заполните все поля";
  else if(name.length <= 1 || name.length > 50)
    fail = "Введите корректное имя";
  else if(pass != repass)
    fail = "Пароли должны совпадать";
  else if(pass.split("&").length > 1)
    fail = "Некорректный пароль";
  if(fail !== ""){
    document.getElementById("error").innerHTML = fail;
  }else{
    alert("Все данные корректно заполнены")
    window.location = 'https://google.com';
  }
}
