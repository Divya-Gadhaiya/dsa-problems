/**Given a non-empty array of integers, every element appears three times except for one, which appears exactly once. Find that single one.
* Note: Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Example 1: Input: [2,2,3,2] Output: 3

Example 2:Input: [0,1,0,1,0,1,99] Output: 99


/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  nums = nums.sort();
  if(nums[0] !== nums[1] && nums[1]===nums[2]){
      return nums[0]
  }  
    for(let i=1; i<nums.length-1; i++){
        if(nums[i-1] !== nums[i]){
            if(nums[i] !== nums[i+1]){
                return nums[i];
            }
            i+=1;
        }
        i+=1;
    }
    return nums[nums.length-1];
};
