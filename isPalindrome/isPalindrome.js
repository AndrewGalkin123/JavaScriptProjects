var isPalindrome = function(x) {
    b = x.toString(10).split("").map(int => parseInt(int, 10)).filter(element => !isNaN(element)).reverse();
    if(x<0){
        b.push("-");
    }
    return Number(b.join("")) === x;
};
console.log(isPalindrome(-12));