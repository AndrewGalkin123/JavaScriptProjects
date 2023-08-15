var merge = function(nums1, m, nums2, n) {
    let count = 0;
    for(let i = m;i < m+n;i++){
        nums1[i] = nums2[count]
        count++
    }
    nums1.sort(function (a, b) {
        return a - b;
    });        
};