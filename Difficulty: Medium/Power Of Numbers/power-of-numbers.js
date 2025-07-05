/**
 * @param {number} n
 * @returns {number}
 */
class Solution {
    ReverseExponentiation(n) {
        // code here
        let originalNum = n;
        let rev = 0;
        while(n > 0) {
            let digit = n % 10;
            rev = rev * 10 + digit;
            n = Math.floor(n / 10);
        }
        
        return originalNum ** rev;
    }
}