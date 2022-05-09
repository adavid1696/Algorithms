// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const hash = new Map();

		for(let i = 0; i < nums.length; i++){
			hash.set(nums[i], 0)
		}

		for(let j = 0; j < nums.length; j++){
			if(!hash.has(nums[j])){
				hash
			}
		}

		return hash
};

console.log(productExceptSelf([5,2,3,4]))