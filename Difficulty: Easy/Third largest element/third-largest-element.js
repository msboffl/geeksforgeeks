/**
 * @param {number[]} arr
 * @returns {number}
 */

class Solution {

    thirdLargest(arr) {
        // your code here
        const n = arr.length;
        arr.sort((a, b) => a-b);
        
        return arr[n-3];
        
    }
}