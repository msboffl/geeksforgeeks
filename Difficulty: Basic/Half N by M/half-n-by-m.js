// User function Template for javascript

/**
 * @param {number} n
 * @param {number} m
 * @returns {number}
 */

class Solution {
    mthHalf(N, M) {
        // code here
    let result = N;

    // Halve N (M-1) times
    for (let i = 1; i < M; i++) {
        result = Math.floor(result / 2);
    }

    return result;
    }
}
