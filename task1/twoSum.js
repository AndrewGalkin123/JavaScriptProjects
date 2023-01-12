var twoSum = function(nums, target) {
    for(var i = 0;i <= nums.length;i++){
        var count = 1;
        do{
            if(target == nums[i] + nums[count] && count!==i){
                var arr = [];
                arr[i] = i;
                arr[count] = count;
                if(arr[count] == arr[i]){
                    count++;
                    arr[count] = count;
                }
                return  arr.filter(element => element !== null);
            }
            count++;
        }while(count < nums.length)

    }
}
console.log(twoSum([1,3,4,2],6));