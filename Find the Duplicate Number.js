Given an array nums containing n + 1 integers where each integer is between 1 and n (inclusive),
prove that at least one duplicate number must exist. Assume that there is only one duplicate number, find the duplicate one.
Note:
You must not modify the array (assume the array is read only).
You must use only constant, O(1) extra space.
Your runtime complexity should be less than O(n2).
There is only one duplicate number in the array, but it could be repeated more than once.

Approach-1
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
for (let i = 0; i < nums.length; i++) 
{ 
    if (nums[Math.abs(nums[i])] >= 0) 
      nums[Math.abs(nums[i])] = -nums[Math.abs(nums[i])]; 
    else
    return Math.abs(nums[i]); 
} 
    
};

Approach-2
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
 if (!nums || nums.length < 2) return -1;
    
    let fast = 0;
    let slow = 0;
    
    do {
        fast = nums[nums[fast]];
        slow = nums[slow];
    }
    while(fast !== slow);
    
    slow = 0;
    while(fast !== slow) {
        slow = nums[slow];
        fast = nums[fast];
    }
    
    return fast;
    
};
