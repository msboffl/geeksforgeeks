/**
 * @param {number} num
 * @returns {number}
 */
class Solution {
    convertFive(num) {
        // handle case when num = 0
        if (num === 0) return 5;
        
        let ans = '';
        
        while (num > 0) {
            let ld = num % 10;
            if (ld === 0) {
                ans = '5' + ans;
            } else {
                ans = ld + ans;
            }
            num = Math.floor(num / 10);
        }
        
        return Number(ans);
    }
}