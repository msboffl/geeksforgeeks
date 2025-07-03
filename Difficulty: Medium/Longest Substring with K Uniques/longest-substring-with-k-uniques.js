/**
 * @param {string} s
 * @param {number} k
 * @returns {number}
 */
class Solution {
    longestKSubstr(s, k) {
        // code here
        let n = s.length;
    let i = 0, j = 0;
    let cnt = 0;
    let maxi = -1;
    let fre = new Array(26).fill(0);
    
    // cnt represents the number of unique
    // characters in the current window

    while (j < n) {
        
        // include s[j] into the window
        fre[s.charCodeAt(j) - 97]++;

        // it is the first occurrence of
        // this character in the window
        if (fre[s.charCodeAt(j) - 97] === 1) cnt++;

        // shrink the window if the number 
        // of unique character is more than k
        while (cnt > k) {
            fre[s.charCodeAt(i) - 97]--;

            // one unique character removed
            if (fre[s.charCodeAt(i) - 97] === 0) cnt--;
            i++;
        }

        // we have exactly k unique characters
        if (cnt === k) {
            maxi = Math.max(maxi, j - i + 1);
        }

        j++;
    }

    return maxi;
    }
}
