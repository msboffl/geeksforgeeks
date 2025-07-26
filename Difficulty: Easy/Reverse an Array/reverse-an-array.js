/**
 * @param {number[]} arr
 * @returns {number[]}
 */

class Solution {
    // Function to reverse the array.
    reverseArray(arr) {
        // your code here
        const n = arr.length;
        let left = 0;
        let right = n-1;
        
        while(left <= right) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
        
        return arr;
    }
}