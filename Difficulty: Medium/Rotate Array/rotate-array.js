// User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} d
 */

class Solution {
    // Function to rotate an array by d elements in counter-clockwise direction.
    rotateArr(arr, d) {
        // code here
      const n = arr.length;
      const temp = new Array(n).fill(0);
      
      if(d > n) d = d % n;
      for (let i = 0; i < n - d; i++) {
        temp[i] = arr[i + d];
      }
      
      for (let i = 0; i < d; i++) {
        temp[n - d + i] = arr[i];
      }
      
      for(let i = 0; i < n; i++) {
          arr[i] = temp[i];
      }
      
      return arr;
    }
}