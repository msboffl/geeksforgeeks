/**
 * @param {number} n
 * @returns {boolean}
 */
class Solution {
    isPrime(n) {
        // code here
        if(n <= 1) return false;
        
        for(let i = 2; i * i <= n; i++) {
            if(n % i === 0) return false;
        }
        
        return true;
    }
}