/**
 * @param {number[]} arr
 * @returns {number[]}
 */
class Solution {
    findDuplicates(arr) {
        // code here
        const n = arr.length;
        const ans = [];
        
        arr.sort((a, b) => a - b);
        
        for(let i = 1; i < n; i++) {
            if(arr[i] === arr[i-1]) {
                if (ans.length === 0 || 
                    ans[ans.length - 1] !== arr[i]) {
                    ans.push(arr[i]);
                }
            }
        }
        
        return ans;
    }
}