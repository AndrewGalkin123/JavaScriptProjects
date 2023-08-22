var isPalindrome = function(s) {
    s = s.replace(/[^a-zа-яё0-9]/gi, '').toLowerCase();

    const reverse = s.split('').reverse().join('');

    if(reverse === s){
        return true
    }
    return false
};

let array = "Race Racer"
console.log(isPalindrome(array))