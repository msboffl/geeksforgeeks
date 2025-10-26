class Solution {
    sumArray(arr) {
        // Your Code goes here
        const n = arr.length;
        
        let total = 0
        
        for(let i = 0; i < n; i++) {
            total += arr[i];
        }
        
        for(let i = 0; i < n; i++) {
            arr[i] = total - arr[i];
        }
    }
}