// User function Template for javascript
class Solution {
    rotate(arr) {
        // code here
        let n = arr.length
        let rotateEle = arr[n-1];
        
        for(let i = n-2; i >= 0; i--) {
            arr[i+1] = arr[i]
        }
        
        arr[0] = rotateEle;
        
        return arr;
    }
}