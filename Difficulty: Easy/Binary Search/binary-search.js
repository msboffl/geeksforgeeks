/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */

class Solution {
    binarysearch(arr, k) {
        // Code Here
        let left = 0;
        let right = arr.length-1;
        let res = -1;
        
        while(left <= right) {
            let mid = left + Math.floor((right - left)/2)
            
            if(arr[mid] === k) {
                res = mid;
                right = mid - 1;
            }
            else if(arr[mid] < k) left = mid + 1;
            else {
                right = mid - 1;
            }
        }
        
        return res;
    }
}