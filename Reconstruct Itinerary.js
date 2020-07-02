Given a list of airline tickets represented by pairs of departure and arrival airports [from, to], reconstruct the itinerary in order. 
All of the tickets belong to a man who departs from JFK. Thus, the itinerary must begin with JFK.

Note:
If there are multiple valid itineraries, you should return the itinerary that has the smallest lexical order when read as a single string. 
For example, the itinerary ["JFK", "LGA"] has a smaller lexical order than ["JFK", "LGB"].All airports are represented by three capital letters (IATA code).
You may assume all tickets form at least one valid itinerary. One must use all the tickets once and only once.

Example 1:
Input: [["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]]
Output: ["JFK", "MUC", "LHR", "SFO", "SJC"]

Example 2:
Input: [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]
Output: ["JFK","ATL","JFK","SFO","ATL","SFO"]
Explanation: Another possible reconstruction is ["JFK","SFO","ATL","JFK","ATL","SFO"]. But it is larger in lexical order.
             
          
/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
    tickets.sort(function(a, b) {
       if (a[0] < b[0]) {
           return -1;
       } else if (a[0] > b[0]) {
           return 1;
       } else {
           if (a[1] < b[1]) {
               return -1;
           }
           
           return 1;
       }
    });
    let map = {},
        len = tickets.length,
        result = [];
        
    for (let i = 0; i < len; i++) {
        if (!map[tickets[i][0]]) {
            map[tickets[i][0]] = [tickets[i][1]];
        } else {
            map[tickets[i][0]].push(tickets[i][1]);
        }
    }
    
    dfs('JFK', result, map);
    
    return result;
};

function dfs(cur, result, map) {
    var arr = map[cur];
    
    while (arr && arr.length > 0) {
        dfs(arr.shift(), result, map);
    }
    
    result.unshift(cur);
}
