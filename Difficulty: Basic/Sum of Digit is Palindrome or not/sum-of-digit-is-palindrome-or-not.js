// User function Template for javascript

/**
 * @param {number} n
 * @return {number}
 */

class Solution {
    isPalindrome(num) {
        return this.reverse(num) === num;
    }
    
    reverse(num) {
        let rev = 0;
        while(num > 0) {
            let ld = num % 10;
            rev = ld + (rev * 10);
            num = Math.floor(num / 10);
        }
        
        return rev;
    }
    
    isDigitSumPalindrome(n) {
        // code here
        let sum = 0;
        while(n > 0) {
            let ld = n % 10;
            sum += ld;
            n = Math.floor(n / 10);
        }
        
        return this.isPalindrome(sum);
    }
}
