/**
 * @function find the minimum cost to fly every person to a city such that exactly N people arrive in each city.
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
const N = costs.length/2;
   return costs
        .sort((a, b) => (a[0] - a[1]) - (b[0] - b[1]))
        .map((cost, index) => 
            index < N 
            ? cost[0] :cost[1])
        .reduce((total, val) => total += val, 0)
}
    
       
