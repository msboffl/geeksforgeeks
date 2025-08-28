/**
 * @param number a
 * @param number b
 * @returns number
 */

class Solution {
    lcm(a, b) {
        // code here
        let max = Math.max(a, b);
        let lcm = max;
        
        while(true) {
            if(lcm % a === 0 && lcm % b === 0) return lcm;
            lcm++
        }
    }
}