// User function Template for javascript

/**
 * @param {number} n
 * @return {number[]}
 */
class Solution {
    getTable(n) {
        // code here
        const ans = [];
        
        function multiply(i) {
            if(i > 10) return
            ans.push(i * n);
            multiply(i+1);
            
        }
        
        multiply(1);
        return ans;
    }
}