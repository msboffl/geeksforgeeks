// User function Template for javascript
/**
 * @param {number} n
 * @returns {number}
 */

class Solution {
    // Function to count the number of perfect squares.
    countSquares(n) {
        // your code here
        let count = 0;
        for(let i = 1; i * i < n; i++) {
            count++;
        }
        
        return count;
    }
}