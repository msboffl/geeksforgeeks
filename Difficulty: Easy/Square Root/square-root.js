/**
 * @param {number} n
 * @returns {number}
 */

class Solution {
    floorSqrt(n) {
        // code here
        let ans = 1;
        let left = 0;
        let right = n;
        
        while(left <= right) {
            let mid = left + Math.floor((right - left) / 2)
            
            if(mid * mid <= n) {
                ans = mid;
                left = mid + 1
            } else {
                right = mid - 1
            }
        }
        
        return ans;
    }
}