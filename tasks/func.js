var lengthOfLastWord = function (s) {
    let count = 0
    let r = s.trim()
   
    for(let i = r.length-1; i >= 0; i --){
        if(r[i] == " "){
            return count
        }
        count++
    }
    return count
};

s = " a"
console.log(lengthOfLastWord(s))