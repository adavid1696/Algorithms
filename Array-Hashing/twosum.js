// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const hash = new Map()

		for(let i = 0; i < nums.length; i++){
			let res = target - nums[i];
			if(hash.has(nums[i])) return [hash.get(nums[i]), i]

			hash.set(res, i) // 3 0
		}

		// for(let i = 0; i < nums.length; i++){
		// 	hash.set(nums[i], i); 
		// }
		
		// console.log(hash)

		// for(let j = 0; j < nums.length; j++){
		// 	let res = target - nums[j] // 7
		// 	if(hash.has(res) && hash.get(res) !== j){ // true && 1
		// 		 return [j, hash.get(res)];
		// 	}
		// }
		

};

console.log(twoSum([3,3], 6))