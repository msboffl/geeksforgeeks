/**
 * @param {number} n
 * @return {string}
 */

class Solution {
    decToBinary(n) {
        // code here
        if(n === 0) return '';
        return this.decToBinary(Math.floor(n/2)) + (n % 2);
    }
}