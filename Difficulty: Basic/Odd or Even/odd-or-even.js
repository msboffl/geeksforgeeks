/**
 * @param {number} n
 * @return {bool}
 */

class Solution {
    isEven(n) {
        // code here
        if((n & 1) === 0) return true;
        return false;
    }
}