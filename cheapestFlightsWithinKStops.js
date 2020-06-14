/** There are n cities connected by m flights. Each flight starts from city u and arrives at v with a price w.
* Now given all the cities and flights, together with starting city src and the destination dst,
* your task is to find the cheapest price from src to dst with up to k stops. If there is no such route, output -1.

/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} K
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, K) {
var M = new Array(n).fill(Infinity);
    M[src] = 0;
    for(var k = 0; k < K + 1; k++) {
        var N = [...M];
        for(let [from, to, price] of flights)
            N[to] = Math.min(N[to], M[from] + price);
        M = [...N];
    }
    return M[dst] != Infinity ? M[dst] : -1
}
