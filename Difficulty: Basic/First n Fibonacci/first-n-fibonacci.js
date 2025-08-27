// User function Template for javascript

/**
 * @param {BigInt} N
 * @returns {BigInt[]}
 */
class Solution {
    // Function to return list containing first n fibonacci numbers.
    fibonacciNumbers(N) {
        // code here
        let ans = [];
        if (N >= 1) ans.push(0);
        if (N >= 2) ans.push(1);
        
        for(let i = 2; i < N; i++) {
            ans.push(ans[i-1] + ans[i-2]);
        }
        
        return ans;
    }
}