var removeElement = function(nums, val) {
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] == val) {
            nums.splice(i, 1); 
        }
    }
};

console.log(moveZeroes([0,1,0,3,12]))