/**
 * @param {number[]} arr
 * @returns {number}
 */
class Solution {
    totalElements(arr) {
        // code here
        const mp = new Map();
          let i = 0, j = 0, n = arr.length;
          let size = 0;
        
          while (j < n) {
          
            // Add the current element
            // to the map (or update its count)
            mp.set(arr[j], (mp.get(arr[j]) || 0) + 1);
        
            // If we have more than 2 distinct elements
            // shrink from the left
            while (mp.size > 2) {
              mp.set(arr[i], mp.get(arr[i]) - 1);
          
              // Remove the number completely
              // if its count becomes 0
              if (mp.get(arr[i]) === 0) mp.delete(arr[i]);
              
              i++; 
            }
        
            // Update the longest size found so far
            size = Math.max(size, j - i + 1);
            j++; 
          }
          return size;
    }
}