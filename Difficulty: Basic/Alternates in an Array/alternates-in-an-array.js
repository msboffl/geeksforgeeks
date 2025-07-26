/**
 * @param {number[]} arr
 */

class Solution {
    getAlternates(arr) {
        // code here
        const ans = []
        for(let i = 0; i < arr.length; i++) {
            if(i % 2 == 0) ans.push(arr[i]);
        }
        
        return ans;
    }
}