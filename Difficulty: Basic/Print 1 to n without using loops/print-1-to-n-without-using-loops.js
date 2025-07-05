// User function Template for javascript

/**
 * @param {number} n
 * @returns {void}
 */

class Solution {
    printTillN(n) {
        this.helper(1, n);
        console.log(); // move to a new line after printing
    }
    
    helper(curr, n) {
        if (curr > n) return;
        process.stdout.write(curr + " ");
        this.helper(curr + 1, n);
    }
}

