// User function Template for javascript
/**
 * @param {number[]} arr - The array of numbers to sum
 * @return {number} - The sum of the array elements
 */
class Solution {
    recurSum(arr, n) {
        if(n <= 0) return 0;
        return this.recurSum(arr, n-1) + arr[n-1];
    }
    
    arraySum(arr) {
        // code here
       return this.recurSum(arr, arr.length); 
    }
}