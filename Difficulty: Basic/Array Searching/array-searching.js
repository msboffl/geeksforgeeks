// User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} x
 * @return {number}
 */
class Solution {
    search(arr, x) {
        // write your code here
        const n = arr.length;
        for(let i = 0; i < n; i++) {
            if(arr[i] === x) return i;
        }
        
        return -1;
    }
}
