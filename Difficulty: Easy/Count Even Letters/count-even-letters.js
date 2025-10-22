/**
 * @param {string} s
 * @returns {number}
 */
class Solution {
    count(s) {
        // code here
        const freq = {};
        
        for(let i = 0; i < s.length; i++) {
            freq[s[i]] = (freq[s[i]] || 0) + 1;
        }
        
        let evenCount = 0;
        for(let char in freq) {
            if(freq[char] % 2 === 0) evenCount++
        }
        
        return evenCount;
    }
}