var plusOne = function (digits) {
    var result = BigInt(digits.join(''));
    result++;
    return result.toString(10).split('').map(int => parseInt(int, 10));
};
console.log(plusOne([1, 2, 3]));
