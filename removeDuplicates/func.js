var moveZeroes = function(nums) {
    let zeroes = []
    let numbers = []
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] == 0){
            zeroes.push(nums[i])
        }else{
            numbers.push(nums[i])
        }
    }
   return  nums = numbers.concat(zeroes)
};

console.log(moveZeroes([0,1,0,3,12]))