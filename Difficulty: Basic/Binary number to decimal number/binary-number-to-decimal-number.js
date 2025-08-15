// User function Template for javascript

class Solution {
    binaryToDecimal(b) {
        // write your code here
        let decimal = 0;
        let power = 0
        for(let i = b.length-1; i >= 0; i--) {
            decimal += (2 ** power) * Number(b[i]);
            power++;
        }
        
        return decimal;
    }
}