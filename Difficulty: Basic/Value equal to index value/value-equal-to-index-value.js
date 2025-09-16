// User function Template for JavaScript

/**
 * @param {number[]} arr
 * @returns {number[]}
 */
class Solution {
    // Function to find elements in the array that are equal to their index.
    valueEqualToIndex(arr) {
        // code here
        let ans = [];
        
        for(let i = 0; i < arr.length; i++) {
            if(i+1 === arr[i]) ans.push(i+1);
        }
        
        return ans;
    }
}
