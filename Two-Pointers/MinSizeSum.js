// Given an array of positive integers nums and a positive integer target, return the minimal length of a contiguous subarray [numsl, numsl+1, ..., numsr-1, numsr] of which the sum is greater than or equal to target. If there is no such subarray, return 0 instead.

// Example 1:

// Input: target = 7, nums = [2,3,1,2,4,3]
// Output: 2
// Explanation: The subarray [4,3] has the minimal length under the problem constraint.

// Example 2:

// Input: target = 4, nums = [1,4,4]
// Output: 1

// Example 3:

// Input: target = 11, nums = [1,1,1,1,1,1,1,1]
// Output: 0

// Constraints

// 1 <= target <= 109
// 1 <= nums.length <= 105
// 1 <= nums[i] <= 105

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
  let left = 0;
	let ans = Infinity;
	let sum = 0;

	for(let i = 0; i < nums.length; i++){
		sum += nums[i];
		console.log('sum', sum)

		while(sum >= target ){
			ans = Math.min(ans, i + 1 - left);
			console.log('i',i + 1, 'left', left)
			console.log('ans', ans)
			sum -= nums[left++];
		}
	}
	return ans !== Infinity ? ans : 0;
};

console.log(minSubArrayLen(7, [2,3,1,2,4,3]))