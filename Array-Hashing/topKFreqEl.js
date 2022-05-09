// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let result = [];
    const map = new Map()
    
    for(let i = 0; i < nums.length; i++){
        if(map.has(nums[i])) map.set(nums[i], map.get(nums[i]) + 1)
        else map.set(nums[i], 1)
    }
    
    map = [...map].sort((a,b) => b[1] - a[1])

    for(let j = 0; j < k; j++){
        result.push(arr[j][0])
    }
    return result
    
};

// [1,1,1,2,2,3]
// 2