function info(word){
  console.log(word+"!");
}
function summa(a,b){
  var res = a + b;
  info(res);
}

function arrSumma(arr){
  var sum = 0;
  for (var i = 0; i < arr.length; i++)
    sum += arr[i];
  return sum;
}
var array = [6,8,1];
var res = arrSumma(array);
console.log(res);
