// User function Template for javascript
/**
 * @param {number[]} arr
 * @param {number} target
 * @returns {number[]}
 */

class Solution {
    subarraySum(arr, target) {
        // code here
        for(let i = 0; i < arr.length; i++) {
            let sum = 0;
            for(let j = i; j < arr.length; j++) {
                sum += arr[j];
                if(sum === target) return [i+1, j+1];
            }
        }
        
        return [-1];
    }
}