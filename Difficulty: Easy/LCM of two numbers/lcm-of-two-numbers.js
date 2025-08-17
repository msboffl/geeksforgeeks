/**
 * @param number a
 * @param number b
 * @returns number
 */

class Solution {
    lcm(a, b) {
        
        let g = Math.max(a, b);
        
       
        let s = Math.min(a, b); 
    
        for (let i = g; i <= a * b; i += g) {
            if (i % s === 0)
                return i;
        }
        return a * b; 
    }
}