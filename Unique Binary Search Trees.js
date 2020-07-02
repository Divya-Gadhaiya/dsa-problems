Given n, how many structurally unique BST's (binary search trees) that store values 1 ... n?
Input: 3
Output: 5
Explanation:
Given n = 3, there are a total of 5 unique BST's:

   1         3     3      2      1
    \       /     /      / \      \
     3     2     1      1   3      2
    /     /       \                 \
   2     1         2                 3
   
 Approach1 -Dynamic programming
 /**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    if(n < 2) return 1;
    let  dp = [];
 
	dp[0] = 1;
	dp[1] = 1;
 
	for (let i = 2; i <= n; i++) {
        dp[i]=0;
        for (let j = 1; j <= i; j++) { 
            // n-i in right * i-1 in left 
            dp[i]+=(dp[i - j] * dp[j - 1]); 
            //console.log(dp[i])
        } 
    } 
 
	return dp[n];
};

