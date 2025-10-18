// User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} x
 * @return {number}
 */

class Solution {
    smallerThanX(arr, n, x) {
        // code here
        let count = 0;
        for(let i = 0; i < n; i++) {
            if(arr[i] < x) count++;
        }
        
        return count;
    }
}