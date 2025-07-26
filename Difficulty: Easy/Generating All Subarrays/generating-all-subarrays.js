// User function Template for javascript
class Solution {
    getSubArrays(arr) {
        // code here
        const n = arr.length;
        const ans = [];
        for(let i = 0; i < n; i++) {
            for(let j = i; j < n; j++) {
                ans.push(arr.slice(i, j+1));
            }
        }
        
        return ans;
    }
}