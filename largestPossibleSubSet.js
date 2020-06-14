/** Given a set of distinct positive integers, find the largest subset such that every pair (Si, Sj) of elements 
* in this subset satisfies: Si % Sj = 0 or Sj % Si = 0.
* If there are multiple solutions, return any subset is fine.


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function(nums) {
    if(nums.length < 2) { return nums; }
    
    nums.sort((a,b) => a-b);
    
    let largestSubSet = [];
    const length = nums.length;
    
    let divCount = Array(length).fill(1); 
    let prev = Array(length).fill(-1); 
  
    let maxIndex = 0; 
  
    for (let i = 1; i < length; i++) { 
        for (let j = 0; j < i; j++) { 
              if (nums[i] % nums[j] == 0 &&  divCount[i] < divCount[j] + 1) { 
                    prev[i] = j; 
                    divCount[i] = divCount[j] + 1; 
              } 
         }
            if (divCount[i] > divCount[maxIndex]) 
                maxIndex = i; 
     } 
  
        let k = maxIndex; 
        while (k >= 0) { 
            largestSubSet.push(nums[k]);
            k = prev[k]; 
        } 
    return largestSubSet;
  
};
