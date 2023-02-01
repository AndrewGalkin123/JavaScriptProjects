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
    // var result = "";
    // if(strs.length===1){
    //     result += strs[0];
    // }
    // for (let i = 1; i < strs.length; i++) {
    //     for (let j = 0; j < strs[i].length; j++) {
    //         if (i !== strs.length - 1) {
    //             if (strs[i][j] === strs[i + 1][j] && strs[i][j] === strs[i -1][j]) {
    //                 result += strs[i][j];
    //             }
    //         }
    //     }
    // }
    // return result;

    // var result = "";
    //
    // function test(t) {
    //     if (t === "undefined") {
    //         return "";
    //     }
    //     return t;
    // }
    //
    // if (strs.length === 1) {
    //     result += strs[0];
    // }
    // for (let i = 1; i < strs.length; i++) {
    //     for (let j = 0; j < strs[i].length; j++) {
    //         if (i !== strs.length - 1) {
    //             if (strs[i + 1][j] === strs[i][j] && strs[i - 1][j] === strs[i][j]) {
    //                 result += strs[i][j];
    //             }
    //         }
    //         if (strs.length === 2) {
    //             if (strs[i - 1][j] === strs[i][j]) {
    //                 result += strs[i][j];
    //             }
    //             if (strs[i] === strs[i - 1]) {
    //                return strs[i];
    //             }
    //             if (strs[i - 1][j] !== strs[i][j]) {
    //                 break;
    //             }
    //         }
    //     }
    // }
    // return [...new Set(test(result))].join('');
    // var result = "";
    //
    // function test(t) {
    //     if (t === "undefined") {
    //         return "";
    //     }
    //     return t;
    // }
    // if (strs.length === 1) {
    //     result += strs[0];
    // }
    // for (let i = 1; i < strs.length; i++) {
    //     do {
    //         if (strs[i + 1][i] === strs[i][i] && strs[i - 1][i] === strs[i][i]) {
    //             result += strs[i][i];
    //         }
    //
    //     }while(i===strs.length)
    // }
    // return test(result);

    // if (!strs.length) return "";
    // if(strs.length===1) return strs[0];
    // if(strs[0] === "") return "";
    // for (let i = 0; i <= strs[0].length; i++) {
    //     for (let j = 1; j < strs.length; j++) {
    //         if (strs[0][i] !== strs[j][i]) {
    //             return strs[0].slice(0, i);
    //         }
    //     }
    // }
    let cur = strs[0]
    let temp = ""
    for(let i = 1; i < strs.length; i++){
        for(let j = 0; j < cur.length; j++){
            if(cur[j] == strs[i][j]){
                temp += cur[j]
            } else {
                break
            }
        }
        cur = temp
        temp = ""
    }
    return cur
};
console.log(longestCommonPrefix(["",""]));