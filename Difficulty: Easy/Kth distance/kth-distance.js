// User function Template for javascript
//Back-end complete function Template for javascript
class Solution {
    checkDuplicatesWithinK(arr, k) {
        // your code
        const n = arr.length;
        for(let i = 0; i < n; i++) {
            for(let j = i + 1; j < n; j++) {
                if(arr[i] == arr[j]) {
                    const distance = Math.abs(i-j);
                    if(distance <= k) return true;
                }
            }
        }
        
        return false;
    }
}