var validMountainArray = function(arr) {
    if (arr.length < 3) {
        return false;
    }
    
    let increasing = 0;
    let decreasing = 0;
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[i - 1]) {
            if (decreasing === 0) {
                increasing++;
            } else {
                return false;
            }
        } else if (arr[i] < arr[i - 1]) {
            if (increasing > 0) {
                decreasing++;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
    
    return increasing > 0 && decreasing > 0;
};
console.log(validMountainArray([3,5,5]))