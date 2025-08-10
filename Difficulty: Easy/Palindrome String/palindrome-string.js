/**
 * @param {string} s
 * @return {boolean}
 */
class Solution {
    isPalindrome(s) {
        // code here
        const n = s.length;
        let left = 0;
        let right = n-1;
        
        while(left < right) {
            if(s[left] != s[right]) {
                return false
            }
            left++;
            right--;
        }
        
        return true;
    }
}
