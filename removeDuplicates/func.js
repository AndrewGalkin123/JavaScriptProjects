var checkIfExist = function(arr) {
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
           if(arr[i] === arr[j] * 2  && i !== j){
               return true
           }
        }
    }
    
    return false
};

console.log(checkIfExist([0,0]))