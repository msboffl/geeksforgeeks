// User function Template for javascript

/**
 * @param {number} n
 * @return {number[]}
 */
class Solution {
    getTable(n) {
        // code here
        const ans = [];
        for(let i = 1; i <= 10; i++) {
            ans.push(i * n);
        }
        
        return ans;
    }
}