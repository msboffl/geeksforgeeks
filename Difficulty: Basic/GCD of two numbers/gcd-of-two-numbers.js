/**
 * @param number a
 * @param number b
 * @returns number
 */

class Solution {
    gcd(a, b) {
        // code here
       while(b !== 0) {
           [a, b] = [b, a % b]
        }

        return a; 
    }
}