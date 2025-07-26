// User function Template for javascript

/**
 * @param {number[]} a
 * @returns {number[]}
 */
class Solution {
    // Function to find the leaders in the array.
    leaders(a) {
        // code here
        const n = a.length;
        const ans = [];
        let maxRight = a[n-1];
        ans.push(maxRight);
        
        for(let i = n-2; i >= 0; i--) {
            if(a[i] >= maxRight) {
                maxRight = a[i];
                ans.push(maxRight);
            }
        }
        
        return ans.reverse();
    }
}