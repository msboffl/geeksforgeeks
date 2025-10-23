// User function Template for javascript
/**
 * @param {number} N
 * @returns {number}
 */

class Solution {
    // Function to compute the ones complement of an integer.
    onesComplement(N) {
        // your code here
        let binary = "";
        
        while(N > 0) {
            let rem = N % 2;
            binary = rem + binary;
            N = Math.floor(N / 2);
        }
        
        // console.log(binary)
        
        let complement = "";
        
        for(let i = 0; i < binary.length; i++) {
            if(binary[i] === "1") complement += "0";
            else complement += "1"
        }
        
        return parseInt(complement, 2);
        
    }
}