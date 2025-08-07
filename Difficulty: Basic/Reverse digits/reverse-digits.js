// User function Template for javascript

/**
 * @param {number} n
 * @returns {number}
 */

class Solution {
    reverseDigits(n) {
        // code here
        let rev = 0;
        while(n > 0) {
            let rem = n % 10;
            rev = rem + (rev * 10) ;
            n = Math.floor(n / 10);
        }
        
        return rev;
    }
}
