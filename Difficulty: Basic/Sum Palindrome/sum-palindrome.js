// User function Template for javascript

/**
 * @param {number} N
 * @return {number}
 */
class Solution {
    isPalindrome(num) {
        return this.reverse(num) === num;
    }
    
    reverse(num) {
        let rev = 0;
        while (num > 0) {
            let ld = num % 10;
            rev = ld + (rev * 10);
            num = Math.floor(num / 10);
        }
        return rev;
    }
    
    isSumPalindrome(N) {
        if (this.isPalindrome(N)) {
            return N;
        }
        
        let num = N;

        for (let i = 0; i < 5; i++) {
            let rev = this.reverse(num);
            num = num + rev;

            if (this.isPalindrome(num)) {
                return num;   
            }
        }

        return -1;
    }
}
