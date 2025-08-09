// User function Template for javascript
/**
 * @param {number[]} arr
 * @returns {number}
 */

class Solution {
    cost(arr) {
        // your code here
        const n = arr.length;
        const small = Math.min(...arr);
        
        return small * (n-1);
    }
}