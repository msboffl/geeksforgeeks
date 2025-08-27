class Solution {
    /**
     * @param number n
     * @returns number
     */
    findSum(n) {
        // code here
        let sum = 0;
        for(let i = 0; i <= n; i++) {
            sum += i;
        }
        
        return sum;
    }
}
