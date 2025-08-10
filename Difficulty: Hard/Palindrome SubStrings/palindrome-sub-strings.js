/**
 * @param {string} s
 * @returns {number}
 */
class Solution {
    countPS(s) {
        // code here
        const n = s.length;
        let count = 0;
        
        function expandFromCenter(left, right) {
            let res = 0;
            while(left >= 0 && right < n && s[left] === s[right]) {
                res++;
                left--;
                right++;
            }
            
            return res;
        }
        
        for(let i = 0; i < n; i++) {
            count += expandFromCenter(i, i);
            count += expandFromCenter(i, i+1);
        }
        
        return count - n;
    }
}
