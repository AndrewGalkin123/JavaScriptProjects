var addTwoNumbers = function(l1, l2) {
    l1.reverse();
    l2.reverse();
    var number1 = Number(l1.reduce((res, item) => res + item, ''));
    var number2 = Number(l2.reduce((res, item) => res + item, ''));
    var result = number1+number2;
    return array = (""+result).split("").map(Number).reverse();
};
console.log(addTwoNumbers([0],[0]));

function reverse(arg=[]){
    let reversed = []
    for (let i = 0; i<arg.length; i++){
        reversed.unshift(arg[i])
    }
    return reversed
}
var addTwoNumbers1 = function(l1, l2) {
    var l3 = reverse(l1);
    var l4 = reverse(l2);
    var number1 = Number(l3.reduce((res, item) => res + item, ''));
    var number2 = Number(l4.reduce((res, item) => res + item, ''));
    var result = number1+number2;
    return array = (""+result).split("").map(Number).reverse();
};
console.log(addTwoNumbers1([2,4,3],  [5,6,4]));
console.log(reverse([2,5,1])) ;

