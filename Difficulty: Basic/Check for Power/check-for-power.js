// User function Template for javascript

/**
 * @param {number} X
 * @param {number} Y
 * @returns {number}
 */

class Solution {
    isPowerOfAnother(X, Y) {
        // code here
        if(X === 1) return Y === 1;
        
        let pow = 1;
        while(pow < Y) {
            pow *= X;
        }
        
        return pow == Y;
    }
    
}
