/**
 * @param {number[]} arr
 * @returns {number[]}
 */
class Solution {
    prefSum(arr) {
        // code here
        const n = arr.length;
        const prefix = [];
        
        prefix[0] = arr[0];
        
        for(let i = 1; i < n; i++) {
            prefix[i] = prefix[i-1] + arr[i]
        }
        
        return prefix;
    }
    
}
