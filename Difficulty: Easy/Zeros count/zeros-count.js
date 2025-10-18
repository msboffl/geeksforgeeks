// User function Template for javascript

class Solution {
    countZeroes(arr) {
        // write your code here
        const n = arr.length;
        let zeros = 0;
        
        for(let i = 0; i < n; i++) {
            if(arr[i] === 0) zeros++
        }
        
        return zeros;
    }
}