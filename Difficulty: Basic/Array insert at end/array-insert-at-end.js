/**
 * @param {number[]} arr
 * @param {number} element
 */
class Solution {
    insertAtEnd(arr, val) {
        // code here
        arr[arr.length] = val;
        
        return arr;
    }
}
