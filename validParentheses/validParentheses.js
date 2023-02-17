var isValid = function(s) {
    // for (let index = 0; index < s.length; index++) {
    //     if(s[index] == "("){
    //         for (let j = 0; j < s.length; j++) {
    //             if(s[j] == ")"){
    //                 return true;
    //             }
    //         }
    //     }if(s[index] == "["){
    //         for (let j = 0; j < s.length; j++) {
    //             if(s[j] == "]"){
    //                 return true;
    //             }
    //         }
    //     }if(s[index] == "{"){
    //         for (let j = 0; j < s.length; j++) {
    //             if(s[j] == "}"){
    //                 return true;
    //             }
    //         }
    //     }
    // }
    for (let index = 0; index < s.length; index++) {
        if(s[index] == "("){
            if(s.includes(")")){
                return true;
            }else{
                return false;
            }
        }
        if(s[index] == "{"){
            if(s.includes("}")){
                return true;
            }else{
                return false;
            }
        }
        if(s[index] == "["){
            if(s.includes("]")){
                return true;
            }else{
                return false;
            }
        }
        
    }
    
};
console.log(isValid("([)]"));