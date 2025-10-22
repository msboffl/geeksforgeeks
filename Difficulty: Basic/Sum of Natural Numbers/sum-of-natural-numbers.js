/**
 * @param {number} n
 * @returns {number}
 */
class Solution {
    findSum(n) {
        // code here
        let sum = 0;
        
        for(let i = 1; i <= n; i++) {
            sum += i
        }
        
        return sum;
    }
}
