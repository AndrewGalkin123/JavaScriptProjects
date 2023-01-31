var longestCommonPrefix = function (strs) {
    // var result = [];
    // for (let i = 0; i < strs.length; i++) {
    //     for (let j = 0; j < strs[i].length; j++) {
    //         if(strs[i-1][j] === strs[i][j] && strs[i][j] === strs[i+1][j]){
    //             console.log(strs[i-1][j]);
    //             console.log(strs[i][j]);
    //             console.log(strs[i+1][j]);
    //             result += strs[i][j];
    //         }
    //     }
    // }
    // return result[0];
    var result = "";
    if(strs.length===1){
        result += strs[0];
    }
    for (let i = 1; i < strs.length; i++) {
        for (let j = 0; j < strs[i].length; j++) {
            if (i !== strs.length - 1) {
                if (strs[i][j] === strs[i + 1][j] && strs[i][j] === strs[i -1][j]) {
                    result += strs[i][j];
                }
            }
        }
    }
    return result;
};
console.log(longestCommonPrefix(["ab", "a"]));