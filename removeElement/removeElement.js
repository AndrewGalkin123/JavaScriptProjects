
var removeElement = function(nums, val) {
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] === val){
            nums = nums.filter((n) => {return n !== val});
        }
    }
    console.log(nums);
};
removeElement([3,2,2,3],3);