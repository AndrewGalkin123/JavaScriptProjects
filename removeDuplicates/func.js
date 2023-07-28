var removeDuplicates = function(nums) {
    if (nums.length === 0) {
        return 0;
    }
    var arr = [];
    for (let i = 0; i < nums.length; i++) {
        if (!arr.includes(nums[i])) {
            arr.push(nums[i]);
        }
    }
    
    for (let i = 0; i < arr.length; i++) {
        nums[i] = arr[i];
    }

   
    return arr.length;
};


nums = [1, 1, 2]
console.log(removeDuplicates(nums))

