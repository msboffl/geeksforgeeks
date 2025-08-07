// User function Template for javascript
class Solution {
    sumOfSquares(n) {
        // code here
        let sum = 0;
        for(let i = 0; i <= n; i++) {
            sum += (i*i);
        }
        
        return sum;
    }
}