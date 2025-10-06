/**
 * @param {number[]} arr
 * @returns {number[]}
 */
class Solution {
    findDuplicates(arr) {
        // code here
        const n = arr.length;
        const freq = new Array(n+1).fill(0);
        const ans = []
        
        for(let num of arr) {
            freq[num]++;
        }
        
        for(let i = 1; i < freq.length; i++) {
            if(freq[i] >= 2) ans.push(i);
        }
        
        return ans;
    }
}