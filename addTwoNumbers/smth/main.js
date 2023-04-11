var longestPalindrome = function (s) {
  var result = []
  for (let i = 0; i < s.length; i++){
    result.push(s[i])
    for (let j = i+1; j < s.length; j++) {
      if (result[i] == result[j]) {
        for (let index = i; index = 0; index--) {
          result.shift()
        }
        for (let u = j; u = result.length; u++) {
          result.pop()
        }
      }
    }
  }
  return result
};
console.log(longestPalindrome("babad"));
//попробуй метод pop , shift , unshift