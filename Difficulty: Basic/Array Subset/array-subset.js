// User function Template for javascript

/**
 * @param {number[]} a
 * @param {number[]} b
 * @returns {boolean}
 */

class Solution {
    isSubset(a, b) {
        // Your code here
        a.sort((x, y) => x - y);
        b.sort((x, y) => x - y);
    
        let i = 0, j = 0;
        let m = a.length, n = b.length;
    
        while (i < m && j < n) {
            if (a[i] < b[j]) {
                i++;
            }
            else if (a[i] == b[j]) {
                i++;
                j++;   
            }
            else {
                
                return false;
            }
        }
    
        return (j == n)
    }
}