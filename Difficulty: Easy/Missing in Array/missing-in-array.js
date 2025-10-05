/**
 * @param {number[]} arr
 * @returns {number}
 */
class Solution {
    missingNum(arr) {
        // code here
        const n = arr.length;

        const sortedArr = arr.sort((a, b) => a - b);
        
        for(let i = 0; i < n; i++) {
            if(arr[i] !== i+1) return i+1;
        }
        
        return arr[n-1] + 1;
    }
}