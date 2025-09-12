/**
 * @param {number} n
 * @returns {number}
 */

class Solution {
    floorSqrt(n) {
        // code here
        if(n === 0 || n === 1) return n;
        
        let r = 1;
        while(r * r <= n) r++;
        
        return r-1;
    }
}