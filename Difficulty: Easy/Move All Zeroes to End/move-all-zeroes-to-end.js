// User function Template for javascript

/**
 * @param {Number[]} arr
 */

class Solution {
    pushZerosToEnd(arr) {
        // code here
        const n = arr.length;
        
        let index = 0;
        for(let i = 0; i < n; i++) {
            if(arr[i] != 0) {
                arr[index++] = arr[i];
            }
        }
        
        while(index < n) {
            arr[index++] = 0;
        }
    }
}