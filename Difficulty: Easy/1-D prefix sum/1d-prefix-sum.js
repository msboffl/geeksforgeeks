/**
 * @param {number[]} arr
 * @returns {number[]}
 */
class Solution {
    prefSum(arr) {
        // code here
        const n = arr.length;
        const ans = new Array(n);
        
        ans[0] = arr[0];
        
        for(let i = 1; i < n; i++) {
            ans[i] = ans[i-1] + arr[i];
        }
        
        return ans;
    }
}
