/**
 * @param {number} n
 * @return {string}
 */

class Solution {
    decToBinary(n) {
        // code here
        let binary = "";
        while (n > 0) {
            let rem = n % 2;
            binary = rem + binary;
            n = Math.floor(n / 2);
        }
        
        
        return binary || '0';
    }
}