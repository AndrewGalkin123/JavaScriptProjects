let result = "";

function handleSubmit() {
  var inputValue = document.getElementById("input").value.replaceAll(' ', '');

  // Разбить строку на отдельные элементы
  var dataArray = inputValue.split('","');

  dataArray = dataArray.map(function (item) {
    return item.replace('"', "");
  });
  dataArray.forEach((el) => {
    result += el + "\n";
  });
  console.log(result);
}

function copyToClipboard() {
  document.getElementById("copyButton").addEventListener("click", function (event) {
    navigator.clipboard.writeText(result);
  });
}
